import React, { Component } from 'react'

import Router from 'next/router'
import { get, post } from "../../lib/http";
import TableLoader from "./TableLoader";
import Field from "./Field";
import { toast } from 'react-toastify';
import Link from "next/link";
import { getUser } from "../../lib/http";

import NProgress from "nprogress";

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            submiting: false,
            data: {},
            errors: [],
        }

        NProgress.configure({ showSpinner: false });
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

        let url = '';

        if (id == 'auth') {
            url = `${resource}`;
        } else if (id) {
            url = `${resource}/${id}/show`;
        }

        const data = await get(url);
        this.setState({ data });

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
        const { data, submiting } = this.state;

        if (submiting) {
            return false;
        }

        NProgress.start();
        this.setState({ submiting: true });

        try {

            if (id) {
                await post(`${resource}/${id}/update`, data);
            } else {
                await post(`${resource}/create`, data);
            }

            Router.push("/" + route);
        } catch (err) {

            if (err.response.data.errors) {
                this.setState({ errors: err.response.data.errors });
            }

            NProgress.done();
            this.setState({ submiting: false });

            toast.error(err.response.data.message);
        }
    }


    render() {

        const { loading, data, errors, submiting } = this.state;
        const { schema, route, hideBack } = this.props;

        if (loading) return <TableLoader />

        const disabled = submiting ? 'disabled' : '';

        return (
            <form onSubmit={this.handleSubmit}>
                {!hideBack && <div className="row ">
                    <div className="col-12 justify-content-right text-right ">
                        <Link href={`/${route}`}>
                            <a href="#" className="btn btn-outline-dark btn-sm text-align-right mb-2">Back to list</a>
                        </Link>
                    </div>
                </div>}
                <div className="row">
                    {Object.keys(schema).map(key => {
                        if (schema[key].fillable) {
                            return <Field errors={errors} schema={schema[key]} name={key} key={key} handleChange={this.handleChange} value={data.hasOwnProperty(key) ? data[key] : ''} />
                        }
                    })}
                </div>
                <button type="submit" className={`btn btn-primary ${disabled}`}>Submit</button>
            </form >
        )
    }
}
