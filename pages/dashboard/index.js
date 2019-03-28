import React, { Component } from 'react'
import App from '../../components/layouts/App'
import ImportantAlerts from "./components/ImportantAlerts";
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser } from '../../actions/index';

class Dashboard extends Component {

    // static async getInitialProps({ req, res }) {
    //     checkAuth(req, res);
    //     return {};
    // }

    static async getInitialProps({ store, isServer, req, res }) {
        checkAuth(req, res);
        await store.dispatch(setUser());

        return { isServer }
    }

    render() {

        const { token, user } = this.props

        return (
            <App title="Dashboard">
                <Card title="Important alerts">
                    <ImportantAlerts />
                </Card>
                <Card title="User">
                    User: {JSON.stringify(user)}
                </Card>
                <Card title="Token">
                    Token: {token}
                </Card>
            </App>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: bindActionCreators(setUser, dispatch)
    }
}

const mapStateToProps = ({ auth }) => ({
    token: auth.token,
    user: auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);