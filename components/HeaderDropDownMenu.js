import React, { Component } from 'react'
import Logout from "./mutations/Logout";
import Link from 'next/link'

export default class HeaderDropDownMenu extends Component {
    render() {
        const userid = 1;
        return (
            <div>
                <div className="btn-group">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        @ <span className="d-none d-md-inline">Enhacements</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Printing Services</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Promitional Items</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Office 365 LIcenses</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Tehephone Integration</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Managed Marketing</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Aceppt Credit Cards & ACH</a>
                        </Link>
                    </div>

                    <style jsx>{`

                        a{
                            font-size: 10pt;
                        }

                        span{
                            font-size: 10pt;
                        }

                        .btn-group{
                            margin-left: 7px;
                        }
                
                `}</style>
                </div>
                <div className="btn-group">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        @ <span>Account</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <Link prefetch href='/profile'>
                            <a className="dropdown-item" href="#">Profile Settings</a>
                        </Link>
                        <Link prefetch href='/company'>
                            <a className="dropdown-item" href="#">Company Settings</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Company Settings</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Billing/Upgrade</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Rewards Center</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">Help Center</a>
                        </Link>
                        <Link prefetch href='#'>
                            <a className="dropdown-item" href="#">10000 Add Credits</a>
                        </Link>

                        <div className="logout-component">
                            <Logout userid={userid} />
                        </div>
                    </div>
                    <style jsx>{`

                        a{
                            font-size: 10pt;
                        }

                        span{
                            font-size: 10pt;
                        }

                        .logout-component{
                            padding-left: 25px;
                            padding-top: 5px;
                            margin-top: 5px;
                            border-top: 1px solid lightgray;
                        }

                        .btn-group{
                            margin-left: 7px;
                        }
                
                `}</style>
                </div>
            </div>
        )
    }
}
