import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import { LOGIN } from "../../gql/Auth";
import Router from 'next/router'

class Logout extends Component {

    onLogout = (e) => {
        e.preventDefault();

        // You can use better way to delete cookies
        document.cookie = "Authorization=";
        Router.push('/login')
    }

    render() {
        return (
            <form onSubmit={event => this.onLogout(event)}>
                <button type='submit'>Logout</button>
                <style jsx>{`
                    button{
                        height: 30px;
                    }
                `}</style>
            </form>
        )
    }
}


export default Logout;
