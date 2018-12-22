import React, { Component } from 'react'
import { PROFILE } from "../../gql/Auth";
import { Query } from "react-apollo";

export default class ProfileData extends Component {
    render() {
        return (
            <Query query={PROFILE} variables={{ id: "cjpzwwo5a00iy3410ilr5cam8" }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div>
                            <h3>{data.User.id}</h3>
                            <h3>{data.User.firstName}</h3>
                            <h3>{data.User.lastName}</h3>
                            <h3>{data.User.email}</h3>
                            <img src={data.User.avatar} />
                        </div>
                    );

                }}
            </Query>
        )
    }
}
