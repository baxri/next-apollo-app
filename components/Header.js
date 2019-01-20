import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import HeaderDropDownMenu from "./HeaderDropDownMenu";
import HeaderSearch from "./HeaderSearch";

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    const { router: { pathname }, sidebarOnClick, authorized, data } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-md">

          {authorized && <a
            className="navbar-brand navbar-btn"
            id="sidebarCollapse"
            href="javascript:void(0)"
            onClick={sidebarOnClick}
          >
            <i className="fas fa-bars"></i>
          </a>}

          {/* DisAppears on small devices  */}
          <Link prefetch href='/' >
            <a className="d-none d-md-block navbar-brand" href="#">WEBMATION</a>
          </Link>

          {/* Appears only on small devices  */}
          {!authorized && <Link prefetch href='/' >
            <a className="navbar-brand d-block d-md-none" href="#">WEBMATION</a>
          </Link>}
          {authorized && <span className="d-block d-md-none"><HeaderDropDownMenu userid={data.user.id} /></span>}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>

            {authorized && <HeaderSearch />}
            {authorized && <HeaderDropDownMenu userid={data.user.id} />}
          </div>



        </nav>

        {authorized && <div className="d-block d-md-none mobile-search"><HeaderSearch /></div>}


        <style jsx>{`

          .mobile-search{
            margin-top: 55px;
          }

          nav{
            width: 100%;
            position: fixed;
            top: 0;
            height: 50px;
            background-color: #2280bd;
            z-index: 3;
            margin: 0px !importtant;
          }

          a{
            color: white;
          }

          .navbar-brand:hover{
            color: white;
          }

      `}</style>
      </div>
    )
  }
}

export default withRouter(Header)
