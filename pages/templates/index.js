import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";

export default class Templates extends Component {
    render() {
        return (
            <App title="Templates">
                <Card title="Templates block">
                    <p>Some templates informations!!!</p>
                </Card>
            </App>
        )
    }
}
