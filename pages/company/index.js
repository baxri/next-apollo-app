import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";
import Form from "../../components/crud/Form";
import { schema, resource, route, entity } from './config';

class Company extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }
    render() {
        const { id } = this.props;
        return (
            <App>
                <Card title={`${entity} edit`}>
                    <Form
                        resource={resource}
                        route={route}
                        schema={schema}
                        id='auth'
                        hideBack={true}
                    />
                </Card>
            </App>
        )
    }
}

export default Company;

