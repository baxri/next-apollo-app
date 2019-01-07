import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";

export default class Store extends Component {
    render() {
        return (
            <App title="Store">
                <Card title="Store block">
                    <p>Some store informations!!!</p>
                </Card>
            </App>
        )
    }
}
