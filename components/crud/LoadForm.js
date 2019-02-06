import React, { Component } from 'react'
import { Query } from "react-apollo";
import Form from "./Form";
import ContentLoaderTable from './ContentLoaderTable'

export default class LoadForm extends Component {
    render() {

        const { query, mutation, field, schema, uischema, id } = this.props;

        console.log(id)

        if (id) {
            return (
                <Query query={query} variables={{ id: parseInt(id) }} ssr={false}
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
        } else {
            return (<div>
                <Form data={{}} mutation={mutation} schema={schema} uischema={uischema} />
            </div>);
        }


    }
}
