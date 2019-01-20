import React, { Component } from 'react'
import App from '../../components/layouts/App'
import LoadForm from '../../components/crud/LoadForm';
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

import { USER as QUERY } from "../../gql/User";
import { UPDATE_USER as MUTATION } from "../../gql/User";

const schema = require('./schema/schema.json');
const uischema = require('./schema/uischema.json');

class Profile extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="User Information">
                <Card title="Profile settings">
                    <LoadForm query={QUERY} mutation={MUTATION} field="user" schema={schema} uischema={uischema} />
                </Card>
            </App>
        )
    }
}

export default Profile;

