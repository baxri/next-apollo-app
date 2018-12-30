import React, { Component } from 'react'
import Router from 'next/router'
import { removeToken } from "../../lib/cookie";
import { Mutation } from "react-apollo";
import { USER } from "../../gql/User";
import { LOGOUT } from "../../gql/Logout";
import Error from "./Error";
import Link from 'next/link'

class Logout extends Component {

    onClick = async (e, action, userid) => {
        e.preventDefault();

        // You can use better way to delete cookies
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
