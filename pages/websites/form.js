import React, { Component } from 'react'

import withAuth from "../../components/HOC/withAuth";
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import Form from "../../components/crud/Form";

import { schema, resource, route, entity } from './config';

class FormPage extends Component {
    render() {
        const { query } = this.props;
        return (
            <App>
                <Card title={`${entity} edit`}>
                    <Form
                        resource={resource}
                        route={route}
                        schema={schema}
                        id={query.id}
                    />
                </Card>
            </App>
        )
    }
}

export default withAuth(FormPage);

