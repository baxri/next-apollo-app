import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Data from './components/Data';
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

class Profile extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Profile Information">
                <Card title="User" >
                    <Data />
                </Card>
            </App>
        )
    }
}

export default Profile;

