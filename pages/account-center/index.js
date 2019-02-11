import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class AccountCenter extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Account Center">
                <Card title="Account Center">
                    <p>Account Centerr</p>
                </Card>
            </App>
        )
    }
}
