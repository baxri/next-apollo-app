import React, { Component } from 'react'
import { Query } from "react-apollo";
import { USER as QUERY } from "../../gql/User";

export default class ProfileData extends Component {
    render() {
        return (
            <Query query={QUERY}>
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
