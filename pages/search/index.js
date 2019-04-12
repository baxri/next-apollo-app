import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import { withRouter } from "next/router";
// import SearchData from "../../components/query/SearchData";
import Card from "../../components/Card";

class Search extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {

        const { router } = this.props;

        return (
            <App title="Search">
                <Card title="Results for search:">
                    {/* <SearchData search={router.query.search} /> */}
                </Card>
            </App>
        )
    }
}

export default withRouter(Search);
