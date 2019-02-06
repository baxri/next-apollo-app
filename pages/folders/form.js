import React, { Component } from 'react'
import App from '../../components/layouts/App'
import LoadForm from '../../components/crud/LoadForm';
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

import { SHOW as QUERY } from "../../gql/Folder";
import { UPDATE } from "../../gql/Folder";
import { CREATE } from "../../gql/Folder";

import schema from './schema/schema';
import uischema from './schema/ui-schema';

class Form extends Component {
    static async getInitialProps({ req, res, query }) {
        checkAuth(req, res);
        return { id: query.id };
    }

    render() {

        const { id } = this.props;

        let MUTATION = null;

        if (id) {
            MUTATION = UPDATE;
        } else {
            MUTATION = CREATE;;
        }

        return (
            <App title="Folder Information">
                <Card title="Profile settings">
                    <LoadForm query={QUERY} id={id} mutation={MUTATION} field="folder" schema={schema} uischema={uischema} />
                </Card>
            </App>
        )
    }
}

export default Form;

