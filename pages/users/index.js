import React, { Component } from 'react'
import App from '../../components/App'
import Card from "../../components/Card";

export default class Users extends Component {
    render() {
        return (
            <App title="Users">
                <Card title="Users block">
                    <p>Some users informations!!!</p>
                </Card>
            </App>
        )
    }
}
