import React, { Component } from 'react'
import Default from '../../components/themes/Default'

import { connect } from 'react-redux'
import { setWebsite } from '../../actions/websites';

import Image from "../../components/Image";
import Favicon from 'react-favicon';
import Head from 'next/head';

class PreviewPage extends Component {
    static async getInitialProps({ store, req, res, query }) {
        await store.dispatch(setWebsite(query.id, req));
        return { query };
    }

    render() {
        const { website } = this.props;

        return (
            <React.Fragment>
                <Favicon url={website.favicon_url} />
                <Head>
                    <title>{website.domain_name}</title>
                </Head>
                <Default>
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Image url={website.logo_url} />
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </header>

                    <main role="main" className="container">
                        <h1 className="mt-5">{website.domain_name}.{website.domain}</h1>
                        <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
                        <p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
                    </main>

                    <footer className="footer">
                        <div className="container">
                            <Image url={website.footer_logo_url} height="30" />
                            &nbsp;&nbsp;&nbsp;
                            <span className="text-muted">Place sticky footer content here.</span>
                        </div>
                    </footer>

                </Default>


                <style global jsx>{`

                    body{
                        background-color: ${website.color_primary} !important;
                    }

                    nav{
                        background-color: ${website.color_secondary} !important;
                    }

                    .footer {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 60px;
                        line-height: 60px;
                        background-color: ${website.color_alert} !important;
                    }

                `}</style>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ websites }) => ({
    website: websites.website,
})

export default connect(mapStateToProps, { setWebsite })(PreviewPage);
