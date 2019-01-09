import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class Tasks extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Tasks">
                <Card title="Tasks block">
                    <p>Some tasks informations!!!</p>
                </Card>
            </App>
        )
    }
}
