import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";

import Card from "../../components/Card";
import Table from '../../components/crud/Table';

import { FEEDS as QUERY } from "../../gql/Feed";

export default class Testlist extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {

        const columns = [
            {
                dataField: 'id',
                text: 'Product ID'
            }, {
                dataField: 'title',
                text: 'Product title'
            }, {
                dataField: 'description',
                text: 'Description'
            },
        ];

        return (
            <App title="Test list">
                <Card title="Test List">
                    <Table query={QUERY} columns={columns} route="users" field="feeds" />
                </Card>
            </App>
        )
    }
}
