import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        const { children, title } = this.props;

        return (
            <div className="my-card">
                <p>{title}</p>
                <div>
                    {children}
                </div>

                <style jsx>{`

                    .my-card{
                        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
                        background-color: #ffffff;
                        padding: 15px;
                        margin-top: 15px;
                   }

                `}</style>
            </div>
        )
    }
}
