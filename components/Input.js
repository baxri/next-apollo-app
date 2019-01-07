import React, { Component } from 'react'

export default class Input extends Component {
    render() {

        const { children } = this.props;

        return (
            <span>
                <input {...this.props} />

                <style jsx>{`

                    input{
                        border: 1px solid lightgray;
                        height: 40px;
                        padding-left: 10px; 
                        outline: none;
                        width : 100%;
                    }
                
                `}</style>
            </span>
        )
    }
}
