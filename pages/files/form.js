import React, { Component } from 'react'

import { checkAuth } from "../../lib/cookie";

import App from '../../components/layouts/App'
import Card from "../../components/Card";
import Form from "../../components/crud/Form";

class FormPage extends Component {
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
                type: 'text',
            },
            created_at: {
                label: 'Ceated At',
                type: 'text',
            },
        };

        return (
            <App title="Folder Information">
                <Card title="Profile settings">
                    <Form
                        uri="/filemanager/folders"
                        id={id}
                        schema={schema}
                    />
                </Card>
            </App>
        )
    }
}

export default FormPage;

