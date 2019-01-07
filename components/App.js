import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";
import { Query } from "react-apollo";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "react-sidebar";
import SideBarContent from "./SideBarContent";
import { USER } from "../gql/User";

Router.onRouteChangeStart = url => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: true
    };
  }

  onSetSidebarOpen = () => {
    console.log(!this.state.sidebarOpen)
    this.setState({ sidebarOpen: (!this.state.sidebarOpen) });
  }

  render() {

    const { children } = this.props;

    return (

      <Query query={USER}>
        {({ loading, error, data }) => {

          const authorized = data && data.user && data.user.email;

          return (<div id="root" className="root container-fluid">

            <Sidebar
              defaultSidebarWidth={10}
              sidebar={<SideBarContent authorized={authorized} data={data} onClose={this.onSetSidebarOpen} />}
              styles={{ sidebar: { background: "darkgray" } }}
              docked={this.state.sidebarOpen}
            >

              <Header authorized={authorized} data={data} sidebarOnClick={this.onSetSidebarOpen} />
              <div className="page-content">
                {children}
              </div>
            </Sidebar>


            <Footer />



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
          </div>);
        }}
      </Query>


    )
  }
}
