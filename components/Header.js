import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

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

            {/* {authorized && <li className={pathname === '/profile' ? 'nav-item active' : 'nav-item'}>
              <Link prefetch href='/profile'>
                <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
              </Link>
            </li>} */}

          </ul>
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
