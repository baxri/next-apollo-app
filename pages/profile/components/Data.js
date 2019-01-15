import React, { Component } from 'react'
import { Query } from "react-apollo";
import Form from "./Form";

import { USER as QUERY } from "../../../gql/User";
import { UPDATE_USER as MUTATION } from "../../../gql/User";

export default class Data extends Component {
    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (<div><Form data={data.user} mutation={MUTATION} /></div>);
                }}
            </Query>
        )
    }
}
