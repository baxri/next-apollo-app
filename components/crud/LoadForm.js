import React, { Component } from 'react'
import { Query } from "react-apollo";
import Form from "./Form";
import ContentLoaderTable from './ContentLoaderTable'

export default class LoadForm extends Component {
    render() {

        const { query, mutation, field, schema, uischema } = this.props;

        return (
            <Query query={query} ssr={false}
            // fetchPolicy="cache-and-network"
            >
                {({ loading, error, data }) => {
                    if (loading) return (<ContentLoaderTable />);

                    return (<div>
                        <Form data={data[field]} mutation={mutation} schema={schema} uischema={uischema} />
                    </div>);
                }}
            </Query>
        )
    }
}
