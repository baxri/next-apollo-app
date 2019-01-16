import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class SupportCenter extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Support Center">
                <Card title="Support Center">
                    <p>Support Center</p>
                </Card>
            </App>
        )
    }
}
