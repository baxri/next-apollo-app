import React, { Component } from 'react'
import Link from 'next/link'
import Logout from "./Logout";
import { withRouter } from 'next/router'

class SideBarContent extends Component {
    render() {

        const { router: { pathname }, onClose, authorized, data } = this.props;

        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={onClose}>&times;</a>

                <Link prefetch href='/dashboard'>
                    <a href="#" className={pathname === '/dashboard' ? 'active' : ''}><i className="fas fa-tachometer-alt fa-fw"></i> Dashboard</a>
                </Link>

                <Link prefetch href='/reports'>
                    <a href="#" className={pathname === '/reports' ? 'active' : ''}><i className="fas fa-chart-line fa-fw"></i> Reports</a>
                </Link>

                <Link prefetch href='/tasks'>
                    <a href="#" className={pathname === '/tasks' ? 'active' : ''}><i className="far fa-check-square fa-fw"></i> Tasks</a>
                </Link>

                <Link prefetch href='/store'>
                    <a href="#" className={pathname === '/store' ? 'active' : ''}><i className="fas fa-cart-plus fa-fw"></i> Store</a>
                </Link>

                <Link prefetch href='/events'>
                    <a href="#" className={pathname === '/events' ? 'active' : ''}><i className="far fa-calendar-alt fa-fw"></i> Events</a>
                </Link>

                <Link prefetch href='/website'>
                    <a href="#" className={pathname === '/website' ? 'active' : ''}><i className="fas fa-laptop fa-fw"></i> Website</a>
                </Link>

                <Link prefetch href='/files'>
                    <a href="#" className={pathname === '/files' ? 'active' : ''}><i className="fas fa-folder-open fa-fw"></i> Files</a>
                </Link>

                <Link prefetch href='/templates'>
                    <a href="#" className={pathname === '/templates' ? 'active' : ''}><i className="far fa-file-alt fa-fw"></i> Templates</a>
                </Link>

                <Link prefetch href='/workflows'>
                    <a href="#" className={pathname === '/workflows' ? 'active' : ''}><i className="fas fa-magic fa-fw"></i> Workflows</a>
                </Link>

                <Link prefetch href='/users'>
                    <a href="#" className={pathname === '/users' ? 'active' : ''}><i className="far fa-address-card fa-fw"></i> Users</a>
                </Link>

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

                    .sidenav .active{
                        color: white;
                    }

                `}</style>

            </div>
        )
    }
}

export default withRouter(SideBarContent)
