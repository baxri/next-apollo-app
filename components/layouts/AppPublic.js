import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";
import Header from "../Header";
import { ToastContainer, toast } from 'react-toastify';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class AppPublic extends Component {
    render() {

        const { children } = this.props;

        return (<div id="root">

            <Header authorized={false} data={null} sidebarOnClick={() => { }} />

            <div className="container">
                {children}
            </div>

            <style jsx>{`
                .container{
                    margin-top: 82px;
                }
            `}</style>

            <ToastContainer />
        </div>)
    }
}
