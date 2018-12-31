import React, { Component } from 'react'
import App from '../components/App'
import Header from '../components/Header'
import ProfileData from '../components/ProfileData';
import { checkAuth } from "../lib/cookie";

class Profile extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App>
                <Header />
                <ProfileData />
            </App>
        )
    }
}

export default Profile;

