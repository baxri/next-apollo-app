import React, { Component } from 'react'

export default class Button extends Component {
    render() {

        const { children } = this.props;

        return (
            <span>
                <button {...this.props} >{children}</button>

                <style jsx>{`

                    button{
                        border: 1px solid lightgray;
                        height: 50px;
                        padding-left: 10px; 
                        outline: none;
                        width : 100%;
                        border-radius: 0px;
                        background-color: #2280bd;
                    }

                    button:hover{
                        background-color: #206694;
                    }
                
                `}</style>
            </span>
        )
    }
}
