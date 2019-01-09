import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";


export default class Templates extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Templates">
                <Card title="Templates block">
                    <p>Some templates informations!!!</p>
                </Card>
            </App>
        )
    }
}
