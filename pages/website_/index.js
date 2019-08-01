import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import withAuth from "../../components/HOC/withAuth";
import Table from "../../components/crud/Table";

import { schema, entityPlurar, resource, route } from "./config";

class Index extends Component {
    render() {
        return (
            <App>
                <Card title={`${entityPlurar} list`}>
                    <Table
                        resource={resource}
                        schema={schema}
                        route={route}
                    />
                </Card>
            </App>
        )
    }
}

export default withAuth(Index);
