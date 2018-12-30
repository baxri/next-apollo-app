import React, { Component } from 'react'
import Router from 'next/router'
import { removeToken } from "../../lib/cookie";

class Logout extends Component {

    onLogout = (e) => {
        e.preventDefault();

        // You can use better way to delete cookies
        removeToken();
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
