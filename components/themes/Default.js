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

export default class Default extends Component {
    render() {

        const { children } = this.props;

        return (<div>
            {children}
        </div>)
    }
}
