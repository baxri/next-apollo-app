import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

import Show from "../../components/crud/Show";

class ShowPage extends Component {
    static async getInitialProps({ req, res, query }) {
        checkAuth(req, res);
        return { id: query.id };
    }

    render() {

        const { id } = this.props;

        const schema = {
            name: {
                label: 'Name',
                type: 'text',
            },
            status: {
                label: 'Status',
                type: 'select',
                options: [
                    { label: 'Published', value: 1 },
                    { label: 'Unpublished', value: 0 },
                ]
            },
            created_at: {
                label: 'Ceated At',
                type: 'date',
            },
        };

        return (
            <App title="Show">
                <Card title="Show">
                    <Show
                        resource="/filemanager/folders"
                        route="files"
                        schema={schema}
                        id={id}
                    />
                </Card>
            </App>
        )
    }
}


export default ShowPage;
