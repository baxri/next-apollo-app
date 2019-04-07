import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

import Table from "../../components/crud/Table";

export default class Files extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {

        const schema = {
            name: {
                label: 'Name',
            },
            status: {
                label: 'Status',
                render: (status) => {
                    return status == 1 ? 'Published' : 'Unbublished'
                }
            },
            created_at: {
                label: 'Created At',
            }
        };

        return (
            <App title="Files" >
                <Card title="Files block">
                    <Table
                        resource="/filemanager/folders"
                        schema={schema}
                        route="files"
                    />
                </Card>
            </App>
        )
    }
}
