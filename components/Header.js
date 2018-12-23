import Link from 'next/link'
import { withRouter } from 'next/router'

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
      <header>
        <Link prefetch href='/'>
          <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
        </Link>
        <Link prefetch href='/about'>
          <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
        </Link>
        <Link prefetch href='/login'>
          <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
        </Link>
        {true && <Link prefetch href='/profile'>
          <a className={pathname === '/profile' ? 'is-active' : ''}>Profile</a>
        </Link>}
        {true && <Link prefetch href='/posts'>
          <a className={pathname === '/posts' ? 'is-active' : ''}>Posts</a>
        </Link>}
        <style jsx>{`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
      </header>
    )
  }
}

export default withRouter(Header)
