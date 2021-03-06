import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        const { children, title } = this.props;

        return (
            <div className="my-card">
                {title && title.length > 0 && <span><strong>{title}</strong><hr /></span>}
                <div>
                    {children}
                </div>

                <style jsx>{`

                    p{
                        text-decoration: bold;
                    }

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
