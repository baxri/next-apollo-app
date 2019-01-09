import React, { Component } from 'react'
import Router from 'next/router'
import { removeToken } from "../../lib/cookie";
import { Mutation } from "react-apollo";
import { LOGOUT } from "../../gql/User";

class Logout extends Component {

    onClick = async (e, action, userid) => {
        e.preventDefault();

        action({ variables: { id: userid } }).then(({ data }) => {
            removeToken();
            Router.push('/')
        }).catch(err => { })
    }

    render() {

        const { userid } = this.props;

        return (
            <Mutation mutation={LOGOUT}>
                {(action, { loading, error }) => {
                    return (
                        <span>
                            <a href="#" onClick={event => this.onClick(event, action, userid)}>
                                <i className="fas fa-sign-out-alt"></i> {loading ? "Loading..." : "Logout"}
                            </a>

                            <style jsx>{`
                                a{
                                    text-decoration: none;
                                    font-size: 15px;
                                    color: #818181;
                                    display: block;
                                    transition: 0.3s;
                                }

                                a:hover {
                                    color: #f1f1f1;
                                }

                                i{
                                    margin-right: 5px;
                                }

                            `}</style>
                        </span>
                    )
                }}
            </Mutation>
        )
    }
}

export default Logout;
