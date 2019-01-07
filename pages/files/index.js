import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";

export default class Files extends Component {
    render() {
        return (
            <App title="Files">
                <Card title="Files block">
                    <p>Some files informations!!!</p>
                </Card>
            </App>
        )
    }
}
