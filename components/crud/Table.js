import React, { Component } from 'react'
import TableLoader from "./TableLoader";
import { get } from "../../lib/http";
import Link from 'next/link'
import { Link as NextLink } from "../../routes";

import Pagination from "./Pagination";

export default class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            data: [],
        }
    }

    onPageChanged = data => {
        this.loadList(data.currentPage);
    };

    async componentDidMount() {
        this.loadList();
    }

    async loadList(page = 1) {
        const { resource, schema } = this.props;
        const data = await get(`${resource}/index?page=${page}`);
        this.setState({ data, loading: false });
    }

    render() {

        const { schema, route } = this.props;
        const { data, loading } = this.state;

        if (loading) return <TableLoader />

        return (
            <div>

                <div className="row ">
                    <div className="col-12 justify-content-right text-right ">
                        <Link href={`${route}/create`}>
                            <a href="#" class="btn btn-primary btn-sm text-align-right mb-2">Add new</a>
                        </Link>
                    </div>
                </div>

                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            {Object.keys(schema).map((key) => {
                                return <th scope="col" key={key}>{schema[key].label}</th>
                            })}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((item, key) => {
                            return <tr key={key}>
                                <th scope="row">{++key}</th>
                                {Object.keys(schema).map((schemaKey) => {
                                    return <th scope="col" key={schemaKey}>
                                        {schema[schemaKey].hasOwnProperty('render') ? schema[schemaKey].render(item[schemaKey]) : item[schemaKey]}
                                    </th>
                                })}
                                <th>
                                    <div className="d-flex controle-buttons">
                                        <NextLink route={`${route}-edit`} params={{ id: item.id }} >
                                            <a href="#"><i className="far fa-edit fa-fw"></i></a>
                                        </NextLink>
                                        &nbsp;
                                        <NextLink route={`${route}-show`} params={{ id: item.id }} >
                                            <a href="#"><i className="fas fa-eye fa-fw"></i> </a>
                                        </NextLink>
                                    </div>
                                </th>
                            </tr>
                        })}
                    </tbody>
                </table>
                <Pagination
                    totalRecords={Math.ceil(data.total / data.per_page)}
                    pageLimit={data.current_page}
                    onPageChanged={this.onPageChanged}
                />
            </div>
        )
    }
}
