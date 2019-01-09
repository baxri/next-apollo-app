import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";
import { Query } from "react-apollo";
import Header from "../Header";
import Footer from "../Footer";
import RightContent from "../RightContent";
import Sidebar from "react-sidebar";
import SideBarContent from "../SideBarContent";
import { USER } from "../../gql/User";

NProgress.configure({ showSpinner: false });

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

    const { children, title } = this.props;

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

              <div className="container-fluid">

                <div className="page-title row">
                  <div className="col">
                    <p>{title}</p>
                  </div>
                </div>

                <div className="page-content row">
                  <div className="left col-8">
                    <div className="content">
                      {children}
                    </div>
                  </div>

                  <div className="right col-4">
                    <RightContent />
                  </div>
                </div>
              </div>

            </Sidebar>

            <Footer />

            <style jsx>{`

              .page-title{
                padding-top: 70px;
                margin-bottom: -12px;
              }

              .page-content{
                padding-bottom: 82px;
              }

              .left, .right{
                /* border: 1px solid red; */
              }

              .left{
                padding-right: 0px !important;
              }

          `}</style>
          </div>);
        }}
      </Query>


    )
  }
}
