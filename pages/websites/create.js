import React, { Component } from 'react'

import withAuth from "../../components/HOC/withAuth";
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import Form from "../../components/crud/Form";

import { schema, resource, route, entity } from "./config";

class Create extends Component {
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

export default withAuth(Create);

