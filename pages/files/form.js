import React, { Component } from 'react'

import { checkAuth } from "../../lib/cookie";

import App from '../../components/layouts/App'
import Card from "../../components/Card";
import Form from "../../components/crud/Form";
import { schema } from './config';

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

        return (
            <App title="Folder Information">
                <Card title="Profile settings">
                    <Form
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

export default FormPage;

