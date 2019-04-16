import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class Website extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Website">
                <Card title="Website block">
                    <p>Some website informations!!!</p>
                </Card>
            </App>
        )
    }
}
