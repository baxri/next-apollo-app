import Link from 'next/link'
import { withRouter } from 'next/router'
import { USER } from "../gql/User";
import { Query } from "react-apollo";
import Error from "./Error";
import Logout from "./Logout";

import React, { Component } from 'react'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }



  render() {

    const { router: { pathname }, sidebarOnClick } = this.props;

    return (
      <Query query={USER}>
        {({ loading, error, data }) => {

          const authorized = data && data.user && data.user.first_name;

          return (<nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="javascript:void(0)" onClick={sidebarOnClick}>
              <i className="fas fa-bars"></i>
            </a>
            <Link prefetch href='/'>
              <a className="navbar-brand" href="#">WEBAPP</a>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className={pathname === '/' ? 'nav-item active' : 'nav-item'}>
                  <Link prefetch href='/'>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </Link>
                </li>

                <li className={pathname === '/about' ? 'nav-item active' : 'nav-item'}>
                  <Link prefetch href='/about'>
                    <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                  </Link>
                </li>

                {!authorized && <li className={pathname === '/login' ? 'nav-item active' : 'nav-item'}>
                  <Link prefetch href='/login'>
                    <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                  </Link>
                </li>}

                {authorized && <li className={pathname === '/profile' ? 'nav-item active' : 'nav-item'}>
                  <Link prefetch href='/profile'>
                    <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
                  </Link>
                </li>}

              </ul>

              {authorized && <Logout userid={data.user.id} />}
            </div>
          </nav>)
        }}
      </Query>
    )
  }
}

export default withRouter(Header)
