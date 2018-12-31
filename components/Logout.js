import React, { Component } from 'react'
import Router from 'next/router'
import { removeToken } from "../lib/cookie";
import { Mutation } from "react-apollo";
import { LOGOUT } from "../gql/User";
import Link from 'next/link'

class Logout extends Component {

    onClick = async (e, action, userid) => {
        e.preventDefault();

        action({ variables: { id: userid } }).then(({ data }) => {
            removeToken();
            Router.push('/login')
        }).catch(err => { })
    }

    render() {

        const { userid } = this.props;

        return (
            <Mutation mutation={LOGOUT}>
                {(action, { loading, error }) => {
                    return (
                        <Link prefetch href='#'>
                            <a onClick={event => this.onClick(event, action, userid)}>{loading ? "Loading..." : "Logout"}</a>
                        </Link>
                    )
                }}
            </Mutation>
        )
    }
}


export default Logout;
