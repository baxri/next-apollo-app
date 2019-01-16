import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class BillingCenter extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Billing Center">
                <Card title="Billing Center">
                    <p>Billing Center</p>
                </Card>
            </App>
        )
    }
}
