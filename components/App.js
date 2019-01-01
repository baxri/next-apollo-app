import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";
import Header from "./Header";
import Sidebar from "react-sidebar";
import SideBarContent from "./SideBarContent";

Router.onRouteChangeStart = url => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: false
    };
  }

  onSetSidebarOpen = () => {
    console.log(!this.state.sidebarOpen)
    this.setState({ sidebarOpen: (!this.state.sidebarOpen) });
  }

  render() {

    const { children } = this.props;

    return (
      <div id="root" className="root container-fluid">

        <Sidebar
          defaultSidebarWidth={10}
          sidebar={<SideBarContent onClose={this.onSetSidebarOpen} />}
          styles={{ sidebar: { background: "darkgray" } }}
          docked={this.state.sidebarOpen}
        >

          <Header sidebarOnClick={this.onSetSidebarOpen} />
          <div className="page-content">
            {children}
          </div>
        </Sidebar>

        <style jsx>{`

          .page-content{
              padding: 20px;
            }

        `}</style>

        <style global jsx>{`

            body{
              margin: 0;
              padding: 0px;
            }

        `}</style>
      </div>
    )
  }
}
