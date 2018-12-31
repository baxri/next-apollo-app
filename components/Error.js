import React, { Component } from 'react'

export default class Error extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>{this.props.error.graphQLErrors[0]['message']}</p>
            </div>
        )
    }
}
