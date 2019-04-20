import React, { Component } from 'react'
import { Facebook } from 'react-content-loader'

export default class ContentLoader extends Component {
    render() {

        return (
            <div className="animated fadeIn">
               <Facebook />
            </div>
        )
    }
}
