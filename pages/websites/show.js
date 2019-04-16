import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

import Show from "../../components/crud/Show";
import { schema, resource, route } from "./config";

class ShowPage extends Component {
    static async getInitialProps({ req, res, query }) {
        checkAuth(req, res);
        return { id: query.id };
    }

    render() {

        const { id } = this.props;

        return (
            <App title="Show">
                <Card title="Show">
                    <Show
                        resource={resource}
                        route={route}
                        schema={schema}
                        id={id}
                    />
                </Card>
            </App>
        )
    }
}


export default ShowPage;
