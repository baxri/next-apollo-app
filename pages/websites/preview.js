import React, { Component } from 'react'
import Default from '../../components/themes/Default'

import Card from "../../components/Card";
import Show from "../../components/crud/Show";
import { schema, resource, route } from "./config";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setWebsite } from '../../actions/index';

import Image from "../../components/Image";

class PreviewPage extends Component {

    static async getInitialProps({ store, req, res, query }) {

        await store.dispatch(setWebsite(query.id, req));

        return { query };
    }

    render() {
        const { website } = this.props;

        console.log(website.color_primary)

        return (
            <React.Fragment>
                <Default>
                    {/* {JSON.stringify(website)} */}
                    <nav className="navbar navbar-expand-lg navbar-light">
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
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




                </Default>


                <style global jsx>{`

                    body{
                        background-color: ${website.color_primary} !important;
                    }

                    nav{
                        background-color: ${website.color_secondary} !important;
                    }

                `}</style>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWebsite: bindActionCreators(setWebsite, dispatch)
    }
}

const mapStateToProps = ({ website }) => ({
    website: website.website.data,
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPage);
