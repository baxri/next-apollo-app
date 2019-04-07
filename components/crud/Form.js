import React, { Component } from 'react'

import { get } from "../../lib/http";
import TableLoader from "./TableLoader";
import Field from "./Field";


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
        this.loadData();
    }

    async loadData() {
        const { uri, id } = this.props;
        const data = await get(`${uri}/${id}/show`);
        this.setState({ data, loading: false });
    }

    handleChange = (e) => {
        const { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({ data });
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const { data } = this.state;

        console.log(data)
    }


    render() {

        const { loading, data } = this.state;
        const { schema } = this.props;

        if (loading) return <TableLoader />

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    {Object.keys(schema).map(key => {
                        return <Field schema={schema[key]} name={key} key={key} handleChange={this.handleChange} value={data[key]} />
                    })}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        )
    }
}
