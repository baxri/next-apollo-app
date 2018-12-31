import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    const { children } = this.props;

    return (
      <div className="root">
        {children}
      </div>
    )
  }
}
