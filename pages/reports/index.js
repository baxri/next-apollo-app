import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";

export default class Reports extends Component {
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
