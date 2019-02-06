import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";

import Card from "../../components/Card";
import Table from '../../components/crud/Table';

import { LIST as QUERY } from "../../gql/Folder";

export default class Index extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {

        const columns = [
            {
                dataField: 'id',
                text: 'ID'
            },
            {
                dataField: 'name',
                text: 'Folder title'
            },
            {
                dataField: 'status',
                text: 'Status'
            },
            {
                dataField: 'created_at',
                text: 'Created At'
            },
        ];

        return (
            <App title="Test list">
                <Card title="Test List">
                    <Table query={QUERY} columns={columns} route="folders" field="folders" />
                </Card>
            </App>
        )
    }
}
