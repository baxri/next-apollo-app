import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";


export default class Users extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Users">
                <Card title="Users block">
                    <p>Some users informations!!!</p>
                </Card>
            </App>
        )
    }
}
