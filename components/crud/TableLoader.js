import React, { Component } from 'react'
import ContentLoader, { List } from 'react-content-loader'

export default class TableLoader extends Component {
    render() {

        return (
            <div className="animated fadeIn">
                <List />
            </div>
        )
    }
}
