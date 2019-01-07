import React, { Component } from 'react'
import App from '../../components/App'
import ImportantAlerts from "../../components/ImportantAlerts";
import Card from "../../components/Card";

export default class Dashboard extends Component {
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
