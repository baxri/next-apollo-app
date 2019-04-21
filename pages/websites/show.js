import React, { Component } from 'react'
import App from '../../components/layouts/App'
import Card from "../../components/Card";
import withAuth from "../../components/HOC/withAuth";
import Show from "../../components/crud/Show";
import { schema, resource, route } from "./config";

class ShowPage extends Component {
    render() {
        const { query } = this.props;
        return (
            <App title="Show">
                <Card title="Show">
                    <Show
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


export default withAuth(ShowPage);
