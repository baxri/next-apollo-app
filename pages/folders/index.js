import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

import Table from "../../components/crud/Table";

import { schema, entityPlurar, resource, route } from "./config";

export default class Files extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App>
                <Card title={`${entityPlurar} list`}>
                    <Table
                        resource={resource}
                        schema={schema}
                        route={route}
                    />
                </Card>
            </App>
        )
    }
}
