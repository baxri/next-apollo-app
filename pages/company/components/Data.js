import React, { Component } from 'react'
import { Query } from "react-apollo";
import Form from "./Form";

import { COMPANY as QUERY } from "../../../gql/Company";

export default class CompanyData extends Component {
    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (<div>
                        <Form user={data.company} />
                    </div>);
                }}
            </Query>
        )
    }
}
