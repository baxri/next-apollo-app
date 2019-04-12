import React, { Component } from 'react'

import { checkAuth } from "../../lib/cookie";

import App from '../../components/layouts/App'
import Card from "../../components/Card";
import Form from "../../components/crud/Form";

import { schema, resource, route, entity } from "./config";

class Create extends Component {
    static async getInitialProps({ req, res, query }) {
        checkAuth(req, res);
        return { id: query.id };
    }

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            data: [],
        }
    }

    render() {
        return (
            <App>
                <Card title={`${entity} add`}>
                    <Form
                        resource={resource}
                        route={route}
                        schema={schema}
                        id={null}
                    />
                </Card>
            </App>
        )
    }
}

export default Create;

