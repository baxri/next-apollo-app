import React, { Component } from 'react'
import { Query } from "react-apollo";
import ProfileDataForm from "./ProfileDataForm";

import { USER as QUERY } from "../../../gql/User";

export default class ProfileData extends Component {
    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (<div><ProfileDataForm user={data.user} /></div>);
                }}
            </Query>
        )
    }
}
