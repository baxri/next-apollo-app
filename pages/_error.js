import React, { Component } from 'react'
import AppPublic from "../components/layouts/AppPublic";

export default class Error extends Component {
    render() {
        return (
            <AppPublic>
                <p>Could't get this page, sorry!</p>
            </AppPublic>
        )
    }
}
