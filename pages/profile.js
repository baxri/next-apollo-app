import React, { Component } from 'react'
import App from '../components/App'
import Header from '../components/Header'
import Logout from '../components/Auth/Logout'
import ProfileData from '../components/Auth/ProfileData';
import Router from 'next/router'
import getCookie from "../helper/cookie";

export default class Profile extends Component {

    static async getInitialProps({ req, res }) {

        const token = getCookie(req);

        console.log(token);

        if (!token) {
            if (!process.browser)
                res.redirect('/');
            else
                Router.push('/');
        }

        return {};
    }

    render() {
        return (
            <App>
                <Header />
                <ProfileData />
                <Logout />
            </App>
        )
    }
}

