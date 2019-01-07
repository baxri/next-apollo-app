import React, { Component } from 'react'
import App from '../../components/App'
import ImportantAlerts from "../../components/ImportantAlerts";

export default class Dashboard extends Component {
    render() {
        return (
            <App title="Dashboard">
                <ImportantAlerts />
            </App>
        )
    }
}
