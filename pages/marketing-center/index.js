import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class MarketingCenter extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Marketing Center">
                <Card title="Marketing Center">
                    <p>Marketing Center</p>
                </Card>
            </App>
        )
    }
}
