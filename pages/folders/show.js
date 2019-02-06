import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";
import View from "../../components/crud/View";

import { SHOW as QUERY } from "../../gql/Folder";

class Show extends Component {
    static async getInitialProps({ req, res, query }) {
        checkAuth(req, res);
        return { id: query.id };
    }

    render() {

        const { id } = this.props;

        return (
            <App title="Show">
                <Card title="Show">
                    <View query={QUERY} id={id} field="folder" />
                </Card>
            </App>
        )
    }
}


export default Show;
