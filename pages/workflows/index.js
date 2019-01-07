import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class Workflows extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Workflows">
                <Card title="Workflows block">
                    <p>Some workflows informations!!!</p>
                </Card>
            </App>
        )
    }
}
