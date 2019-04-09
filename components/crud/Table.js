import React, { Component } from 'react'
import TableLoader from "./TableLoader";
import { get, post } from "../../lib/http";
import Link from 'next/link'
import { Link as NextLink } from "../../routes";
import NProgress from "nprogress";
import { toast } from 'react-toastify';
import Pagination from "./Pagination";
import DeleteModal from "./modal";
import PaginationNew from "react-js-pagination";

// require("bootstrap/less/bootstrap.less");

export default class Table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            data: [],
            currentPage: 1,
            deleteModal: false,
            deleteId: null,
        }

        NProgress.configure({ showSpinner: false });
    }

    onPageChanged = data => {
        this.setState({ currentPage: data.currentPage });
        this.loadList(data.currentPage);
    };

    async componentDidMount() {
        this.loadList();
    }

    async loadList(page = 1) {

        NProgress.start();

        const { resource, schema } = this.props;
        const data = await get(`${resource}/index?page=${page}`);
        this.setState({ data, loading: false });

        NProgress.done();
    }

    delete = async (id) => {

        const { resource } = this.props;
        const { currentPage } = this.state;

        try {
            NProgress.start();
            await post(`${resource}/${id}/delete`, {});
            await this.loadList(currentPage);
        } catch (err) {
            NProgress.done();
            toast.error(err.response.data.message);
        }
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
                            <a href="#" className="btn btn-primary btn-sm text-align-right mb-2">Add new</a>
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
                                        &nbsp;
                                        <a href="#" onClick={() => this.setState({ deleteId: item.id })} data-toggle="modal" data-target="#exampleModal"><i className="fas fa-trash fa-fw"></i> </a>
                                    </div>
                                </th>
                            </tr>
                        })}
                    </tbody>
                </table>
                {/* <Pagination
                    totalPages={Math.ceil(data.total / data.per_page)}
                    totalRecords={data.total}
                    pageLimit={data.per_page}
                    // pageLimit={data.current_page}
                    onPageChanged={this.onPageChanged}
                /> */}
                <nav aria-label="Page navigation example">
                    <PaginationNew
                        activePage={data.currentPage}
                        itemsCountPerPage={2}
                        totalItemsCount={data.total}
                        pageRangeDisplayed={5}
                        onChange={this.onPageChanged}
                    />
                </nav>


                <DeleteModal deleteHandler={this.delete} id={this.state.deleteId} />
            </div>
        )
    }
}
