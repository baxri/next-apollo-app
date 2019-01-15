import React, { Component } from 'react'
import { Query } from "react-apollo";
import Form from "./Form";

import { COMPANY as QUERY } from "../../../gql/Company";
import { UPDATE_USER as MUTATION } from "../../../gql/User";

export default class CompanyData extends Component {
    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (<div>
                        <Form data={data.company} mutation={MUTATION} />
                    </div>);
                }}
            </Query>
        )
    }
}
