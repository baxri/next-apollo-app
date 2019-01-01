import React, { Component } from 'react'

export default class SideBarContent extends Component {
    render() {

        const { onClose } = this.props;

        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={onClose}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>

                <style jsx >{`

                .sidenav {
                    padding-right: 60px;
                    height: 100%; 
                    z-index: 1; 
                    top: 0; 
                    left: 0;
                    background-color: #111; 
                    padding-top: 60px; 
                }

                .sidenav a {
                    padding: 8px 8px 8px 32px;
                    text-decoration: none;
                    font-size: 20px;
                    color: #818181;
                    display: block;
                    transition: 0.3s;
                }

                .sidenav a:hover {
                    color: #f1f1f1;
                }

                .sidenav .closebtn {
                    position: absolute;
                    top: 0;
                    right: 25px;
                    font-size: 36px;
                    margin-left: 50px;
                }

                `}</style>

            </div>
        )
    }
}
