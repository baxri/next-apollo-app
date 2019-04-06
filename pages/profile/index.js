import React, { Component } from 'react'
import App from '../../components/layouts/App'
import { checkAuth } from "../../lib/cookie";
import Card from "../../components/Card";

// import { USER as QUERY } from "../../gql/User";
// import { UPDATE_USER as MUTATION } from "../../gql/User";
// import LoadForm from '../../components/crud/LoadForm';
// import schema from './schema/schema';
// import uischema from './schema/uischema';

class Profile extends Component {
    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }

    render() {
        return (
            <App title="User Information">
                <Card title="Profile settings">
                    {/* <LoadForm query={QUERY} mutation={MUTATION} field="user" schema={schema} uischema={uischema} /> */}
                </Card>
            </App>
        )
    }
}

export default Profile;

