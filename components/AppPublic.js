import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class AppPublic extends Component {

    constructor(props) {
        super(props)

        this.state = {
        };
    }

    render() {

        const { children } = this.props;

        return (<div id="root" className="root container-fluid">

            <div className="container-fluid">
                <div className="page-content row">
                    <div className="col-12">
                        <div className="content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`



                `}</style>
        </div>)
    }
}
