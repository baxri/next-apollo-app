import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";
import { Query } from "react-apollo";
import Header from "../Header";
import Footer from "../Footer";
import RightContent from "../RightContent";
// import Sidebar from "react-sidebar";
import Sidebar from "../Sidebar";
import SideBarContent from "../SideBarContent";
import { USER } from "../../gql/User";
import { ToastContainer, toast } from 'react-toastify';

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
      sidebarOpen: true,
    };
  }

  onSetSidebarOpen = () => {
    console.log(this.state.sidebarOpen)
    this.setState({ sidebarOpen: (!this.state.sidebarOpen) });
  }

  render() {

    const { children, title } = this.props;

    return (

      <Query query={USER}>
        {({ loading, error, data }) => {

          if (loading) return (<div>Loading...</div>);

          const authorized = data && data.user && data.user.email;

          return (<div id="root" className="wrapper">

            <Header authorized={authorized} data={data} sidebarOnClick={this.onSetSidebarOpen} />

            <div className="sidebar-wrapper">
              <Sidebar open={this.state.sidebarOpen} />
            </div>

            {/* <Sidebar
              defaultSidebarWidth={10}
              sidebar={<SideBarContent authorized={authorized} data={data} onClose={this.onSetSidebarOpen} />}
              styles={{ sidebar: { background: "darkgray" } }}
              docked={this.state.sidebarOpen}
            /> */}

            <div id="main" className="container-fluid">
              <div className="page-content row">
                <div className="left col-lg-9">
                  <div className="content">
                    {children}
                  </div>
                </div>
                <div className="right col-lg-3">
                  <RightContent />
                </div>
              </div>
            </div>
            <Footer />

            <style jsx>{`

              .sidebar-wrapper{
                margin-top: 50px;
              }

              .page-content{
                padding-top: 35px;
                padding-bottom: 82px;
              }

              #main {
                  padding: 15px;
              }

              @media only screen and (max-width: 768px){
                .sidebar-wrapper{
                  margin-top: 100px;
                }

              .page-content{
                  padding-top: 85px;
                }
              }

          `}</style>
            <ToastContainer />
          </div>);
        }}
      </Query>


    )
  }
}
