import React, { Component } from 'react'
import { Query } from "react-apollo";
import Form from "./Form";

export default class LoadForm extends Component {
    render() {

        const { query, mutation, field, schema, uischema } = this.props;

        return (
            <Query query={query}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (<div>
                        <Form data={data[field]} mutation={mutation} schema={schema} uischema={uischema} />
                    </div>);
                }}
            </Query>
        )
    }
}
