import React, { Component } from 'react'
import App from '../../components/layouts/App'
import ImportantAlerts from "./components/ImportantAlerts";
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

export default class Dashboard extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Dashboard">
                <Card title="Important alerts">
                    <ImportantAlerts />
                </Card>
                <Card title="Wellcome!">

                </Card>
            </App>
        )
    }
}
