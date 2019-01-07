import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div className="footer d-flex flex-row justify-content-between">

                <a href="#" className="d-inline-flex"><i className="fas fa-user-plus"></i> Sales Center</a>
                <a href="#" className="d-inline-flex"><i className="fas fa-users"></i> Account Center</a>
                <a href="#" className="d-inline-flex"><i className="far fa-money-bill-alt"></i> Billing Center</a>
                <a href="#" className="d-inline-flex"><i className="fas fa-power-off"></i> Marketing Center</a>
                <a href="#" className="d-inline-flex"><i className="fas fa-medkit"></i> Support Center</a>

                <style jsx>{`

                .footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    color: white;
                    text-align: center;
                    z-index: 1000000;
                    height: 50px;
                    background-color: #2280bd;
                    padding-left: 32px;
                    padding-right: 32px;
                    font-size: 12pt;
                }

                .footer a, .footer i{
                    color: white;
                    line-height: 50px;
                    height: 50px;
                    transition: 0.1s;
                }

                i{
                    margin-right: 5px;
                }

            `}</style>
            </div>
        )
    }
}
