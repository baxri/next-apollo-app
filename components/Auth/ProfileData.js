import React, { Component } from 'react'
import { USER } from "../../gql/User";
import { Query } from "react-apollo";

export default class ProfileData extends Component {
    render() {
        return (
            <Query query={USER}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (
                        <div>
                            <h3>{data.user.first_name}</h3>
                            <h3>{data.user.last_name}</h3>
                            <h3>{data.user.email}</h3>
                            <h3>{data.user.status}</h3>
                        </div>
                    );
                }}
            </Query>
        )
    }
}
