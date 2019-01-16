import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class SalesCenter extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Sales Center">
                <Card title="Sales Center">
                    <p>Sales Center</p>
                </Card>
            </App>
        )
    }
}
