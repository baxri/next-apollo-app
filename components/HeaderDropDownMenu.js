import React, { Component } from 'react'
import Logout from "./mutations/Logout";
import Link from 'next/link'

export default class HeaderDropDownMenu extends Component {
    render() {

        const { userid } = this.props

        return (
            <div className="btn-group">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                </button>

                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">

                    <Link prefetch href='/profile'>
                        <a className="dropdown-item" href="#">Profile page</a>
                    </Link>

                    <div className="logout-component">
                        <Logout userid={userid} />
                    </div>
                </div>

                <style jsx>{`

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
        )
    }
}
