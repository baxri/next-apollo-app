import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'


class SideBar extends Component {
    render() {

        const { router: { pathname }, onClose, authorized, data, open } = this.props;

        return (
            <nav id="sidebar" className={open ? "" : "active"}>

                <div className="sidebar-header text-center">
                    <div className="userinfo">
                        <img src="http://mainsider.com/images/hersh.jpg" className="img-responsive profile" />
                        <div className="username">
                            <h4>Hersh Sandhoo</h4>
                            <h5>President and CEO</h5>
                        </div>
                    </div>
                    <img src="http://webmation.com/images/logo.png" className="img-responsive logo center-block" />
                </div>


                <ul className="list-unstyled components">

                    <li>
                        <Link prefetch href='/dashboard'>
                            <a href="#" className={pathname === '/dashboard' ? 'active' : ''}><i className="fas fa-tachometer-alt fa-fw"></i> Dashboard</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/reports'>
                            <a href="#" className={pathname === '/reports' ? 'active' : ''}><i className="fas fa-chart-line fa-fw"></i> Reports</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/tasks'>
                            <a href="#" className={pathname === '/tasks' ? 'active' : ''}><i className="far fa-check-square fa-fw"></i> Tasks</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/store'>
                            <a href="#" className={pathname === '/store' ? 'active' : ''}><i className="fas fa-cart-plus fa-fw"></i> Store</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/events'>
                            <a href="#" className={pathname === '/events' ? 'active' : ''}><i className="far fa-calendar-alt fa-fw"></i> Events</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/website'>
                            <a href="#" className={pathname === '/website' ? 'active' : ''}><i className="fas fa-laptop fa-fw"></i> Website</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/folders'>
                            <a href="#" className={pathname === '/folders' ? 'active' : ''}><i className="fas fa-folder-open fa-fw"></i>Folders</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/templates'>
                            <a href="#" className={pathname === '/templates' ? 'active' : ''}><i className="far fa-file-alt fa-fw"></i> Templates</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/workflows'>
                            <a href="#" className={pathname === '/workflows' ? 'active' : ''}><i className="fas fa-magic fa-fw"></i> Workflows</a>
                        </Link>
                    </li>

                    <li>
                        <Link prefetch href='/users'>
                            <a href="#" className={pathname === '/users' ? 'active' : ''}><i className="far fa-address-card fa-fw"></i> Users</a>
                        </Link>
                    </li>

                </ul>

                <style jsx>{`

                    #sidebar .active{
                        color: black;
                    }
                
                `}</style>
            </nav>
        )
    }
}


export default withRouter(SideBar)
