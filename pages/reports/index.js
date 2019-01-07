import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";


export default class Reports extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Reports">
                <Card title="Reports block">
                    <p>Some report informations!!!</p>
                </Card>
            </App>
        )
    }
}
