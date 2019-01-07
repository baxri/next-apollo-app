import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";

export default class Website extends Component {
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
