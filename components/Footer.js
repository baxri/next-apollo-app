import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

class Footer extends Component {
    render() {

        const { router: { pathname } } = this.props;

        console.log(pathname)

        return (
            <div className="footer d-flex flex-row justify-content-between">

                <Link prefetch href='sales-center'>
                    <a href="#" className={pathname === '/sales-center' ? 'd-inline-flex active' : 'd-inline-flex'}><i className="fas fa-user-plus"></i> <span className="d-none d-md-block">Sales Center</span></a>
                </Link>

                <Link prefetch href='account-center'>
                    <a href="#" className={pathname === '/account-center' ? 'd-inline-flex active' : 'd-inline-flex'}><i className="fas fa-users"></i> <span className="d-none d-md-block">Account Center</span></a>
                </Link>

                <Link prefetch href='billing-center'>
                    <a href="#" className={pathname === '/billing-center' ? 'd-inline-flex active' : 'd-inline-flex'}><i className="far fa-money-bill-alt"></i> <span className="d-none d-md-block">Billing Center</span></a>
                </Link>

                <Link prefetch href='marketing-center'>
                    <a href="#" className={pathname === '/marketing-center' ? 'd-inline-flex active' : 'd-inline-flex'}><i className="fas fa-power-off"></i> <span className="d-none d-md-block">Marketing Center</span></a>
                </Link >

                <Link prefetch href='support-center'>
                    <a href="#" className={pathname === '/support-center' ? 'd-inline-flex active' : 'd-inline-flex'}><i className="fas fa-medkit"></i> <span className="d-none d-md-block">Support Center</span></a>
                </Link >

                <style jsx>{`

                .footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    color: white;
                    text-align: center;
                    z-index: 3000000;
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
                    text-align: center;
                    display: inline-block;
                }

                @media only screen and (max-width: 768px){
                    i{
                        width: 100%;
                    }
                }
                

                .footer a{
                    width: 100%;
                    text-align: center;
                }

                .active{
                   border-top: 4px solid white;
                }

            `}</style>
            </div >
        )
    }
}

export default withRouter(Footer);