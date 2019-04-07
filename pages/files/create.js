import React, { Component } from 'react'

import { checkAuth } from "../../lib/cookie";

import App from '../../components/layouts/App'
import Card from "../../components/Card";
import Form from "../../components/crud/Form";

class CreatePage extends Component {
    static async getInitialProps({ req, res, query }) {
        checkAuth(req, res);
        return { id: query.id };
    }

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            data: [],
        }
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
            <App title="Folder Information">
                <Card title="Profile settings">
                    <Form
                        resource="/filemanager/folders"
                        route="files"
                        schema={schema}
                        id={null}
                    />
                </Card>
            </App>
        )
    }
}

export default CreatePage;

