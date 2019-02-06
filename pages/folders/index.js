import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import { withRouter } from 'next/router'
import Card from "../../components/Card";
import Table from '../../components/crud/Table';

import { LIST } from "../../gql/Folder";
import { DELETE } from "../../gql/Folder";

class Index extends Component {
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
                    <Table query={LIST} remove={DELETE} columns={columns} route="folders" field="folders" />
                </Card>
            </App>
        )
    }
}

export default withRouter(Index)
