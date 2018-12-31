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

    const { router: { pathname } } = this.props;

    return (
      <Query query={USER}>
        {({ loading, error, data }) => {

          const authorized = data && data.user && data.user.first_name;

          return (<header>

            {authorized && <p>{data.user.first_name} {data.user.last_name}</p>}

            <Link prefetch href='/'>
              <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
            </Link>
            <Link prefetch href='/about'>
              <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
            </Link>
            {!authorized && <Link prefetch href='/login'>
              <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
            </Link>}
            {authorized && <Link prefetch href='/profile'>
              <a className={pathname === '/profile' ? 'is-active' : ''}>Profile</a>
            </Link>}
            {authorized && <Logout userid={data.user.id} />}
          </header>)
        }}

      </Query>
    )
  }
}

export default withRouter(Header)
