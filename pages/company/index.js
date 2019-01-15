import React, { Component } from 'react'
import App from '../../components/layouts/App'
import LoadForm from '../../components/crud/LoadForm';
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

import { COMPANY as QUERY } from "../../gql/Company";
import { UPDATE_USER as MUTATION } from "../../gql/User";
const schema = require('./schema/schema.json');
const uischema = require('./schema/uischema.json');

class Company extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="Company Information">
                <Card title="Company" >
                    <LoadForm query={QUERY} mutation={MUTATION} field="company" schema={schema} uischema={uischema} />
                </Card>
            </App>
        )
    }
}

export default Company;

