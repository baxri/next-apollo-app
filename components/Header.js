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
      <nav className="navbar navbar-expand-lg">

        {authorized && <a className="navbar-brand" href="javascript:void(0)" onClick={sidebarOnClick}>
          <i className="fas fa-bars"></i>
        </a>}

        <Link prefetch href='/'>
          <a className="navbar-brand" href="#">WEBMATION</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>

          {/* {authorized && <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
          </form>} */}

          {authorized && <HeaderSearch />}

          {authorized && <HeaderDropDownMenu userid={data.user.id} />}
        </div>

        <style jsx>{`

                nav{
                  width: 100%;
                  position: fixed;
                  top: 0;
                  height: 50px;
                  background-color: #2280bd;
                  z-index: 1;
                  margin: 0px !importtant;
                }

                a{
                  color: white;
                }

                .navbar-brand:hover{
                  color: white;
                }

            `}</style>

      </nav>
    )
  }
}

export default withRouter(Header)
