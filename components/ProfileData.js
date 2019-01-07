import React, { Component } from 'react'
import { USER } from "../gql/User";
import { Query } from "react-apollo";

export default class ProfileData extends Component {
    render() {
        return (
            <Query query={USER}>
                {({ loading, error, data }) => {
                    if (loading) return (<p>Loading...</p>);
                    return (
                        <div>
                            <p>{data.user.id}</p>
                            <p>{data.user.first_name}</p>
                            <p>{data.user.last_name}</p>
                            <p>{data.user.email}</p>
                            <p>{data.user.status}</p>
                        </div>
                    );
                }}
            </Query>
        )
    }
}
