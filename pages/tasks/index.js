import React, { Component } from 'react'
import App from '../../components/App'
import ImportantAlerts from "../../components/ImportantAlerts";
import Card from "../../components/Card";

export default class Tasks extends Component {
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
