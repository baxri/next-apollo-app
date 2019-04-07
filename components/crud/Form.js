import React, { Component } from 'react'

import Router from 'next/router'
import { get, post } from "../../lib/http";
import TableLoader from "./TableLoader";
import Field from "./Field";
import { toast } from 'react-toastify';

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            submiting: false,
            data: {},
        }
    }

    async componentDidMount() {

        this.fillDefaults();
        this.loadData();
    }

    fillDefaults = () => {
        const { schema } = this.props;

        let data = {};

        Object.keys(schema).map(key => {
            if (schema[key].hasOwnProperty('default')) {
                data[key] = schema[key].default;
            }
        })

        this.setState({ data });
    }

    async loadData() {
        const { resource, id } = this.props;



        if (id) {
            const data = await get(`${resource}/${id}/show`);
            this.setState({ data });
        }

        this.setState({ loading: false });
    }

    handleChange = (e) => {
        const { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({ data });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { resource, id, route } = this.props;
        const { data } = this.state;

        try {


            console.log(data)

            // if (id) {
            //     await post(`${resource}/${id}/update`, data);
            // } else {
            //     await post(`${resource}/create`, data);
            // }

            // Router.push("/" + route);
        } catch (err) {
            toast.error(err.message);
        }
    }


    render() {

        const { loading, data } = this.state;
        const { schema } = this.props;

        if (loading) return <TableLoader />

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    {Object.keys(schema).map(key => {
                        if (schema[key].fillable) {
                            return <Field schema={schema[key]} name={key} key={key} handleChange={this.handleChange} value={data.hasOwnProperty(key) ? data[key] : ''} />
                        }
                    })}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        )
    }
}
