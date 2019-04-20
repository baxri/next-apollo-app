import React, { Component } from 'react'

import Router from 'next/router'
import { get, post } from "../../lib/http";
import TableLoader from "./TableLoader";
import Field from "./Field";
import { toast } from 'react-toastify';

export default class Show extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            submiting: false,
            data: {},
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const { resource, id } = this.props;
        const { data } = await get(`${resource}/${id}`);


        this.setState({ data, loading: false });
    }

    render() {

        const { loading, data } = this.state;
        const { schema } = this.props;

        if (loading) return <TableLoader />

        return (
            <form onSubmit={this.handleSubmit}>
                {/* <div className="row"> */}
                {Object.keys(schema).map(key => {
                    return <div key={key} className="row">
                        <div className="col-12 mb-2">
                            <h5>{schema[key]['label']}</h5>
                            <div>
                                {schema[key].hasOwnProperty('render') ? schema[key].render(data[key]) : data[key]}
                            </div>
                        </div>
                    </div>
                    // return <Field schema={schema[key]} name={key} key={key} handleChange={this.handleChange} value={data[key]} />
                })}
                {/* </div> */}
            </form>
        )
    }
}
