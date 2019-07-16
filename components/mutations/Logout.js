import React, { Component } from 'react'
import Router from 'next/router'
import { removeToken } from "../../lib/cookie";

class Logout extends Component {

    onClick = async (e) => {
        e.preventDefault();

        // action({ variables: { id: userid } }).then(({ data }) => {
        //     removeToken();
        //     Router.push('/')
        // }).catch(err => { })

        removeToken();
        Router.push('/')
    }

    render() {

        const loading = false;


        return (
            <span>
                <a href="#" onClick={this.onClick}>
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
    }
}

export default Logout;
