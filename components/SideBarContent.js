import React, { Component } from 'react'
import Logout from "./Logout";

export default class SideBarContent extends Component {
    render() {

        const { onClose, authorized, data } = this.props;

        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={onClose}>&times;</a>
                <a href="#"><i className="fas fa-tachometer-alt fa-fw"></i> Dashboard</a>
                <a href="#"><i className="fas fa-chart-line fa-fw"></i> Reports</a>
                <a href="#"><i className="far fa-check-square fa-fw"></i> Tasks</a>
                <a href="#"><i className="fas fa-cart-plus fa-fw"></i> Store</a>
                <a href="#"><i className="far fa-calendar-alt fa-fw"></i> Events</a>
                <a href="#"><i className="fas fa-laptop fa-fw"></i> Website</a>
                <a href="#"><i className="fas fa-folder-open fa-fw"></i> Files</a>
                <a href="#"><i className="far fa-file-alt fa-fw"></i> Templates</a>
                <a href="#"><i className="fas fa-magic fa-fw"></i> Workflows</a>
                <a href="#"><i className="far fa-address-card fa-fw"></i> Users</a>

                {authorized && <div className="sidebar-logout-wraper"><Logout userid={data.user.id} /></div>}

                <style jsx >{`

                    .sidenav {
                        padding-right: 60px;
                        height: 100%; 
                        z-index: 1; 
                        top: 0; 
                        left: 0;
                        background-color: #111; 
                        padding-top: 60px; 
                        z-index: 2000000;
                    }

                    .sidenav a {
                        padding: 8px 8px 8px 32px;
                        text-decoration: none;
                        font-size: 15px;
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

                    i{
                        margin-right: 5px;
                    }

                    .sidebar-logout-wraper{
                        position: fixed;
                        bottom: 82px;
                        left: 32px;
                    }

                `}</style>

            </div>
        )
    }
}
