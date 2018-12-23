import React, { Component } from 'react'
import App from '../components/App'
import Header from '../components/Header'
import Logout from '../components/Auth/Logout'
import ProfileData from '../components/Auth/ProfileData';
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
                <Logout />
                <ProfileData />
            </App>
        )
    }
}

export default Profile;

