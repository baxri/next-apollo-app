import React, { Component } from 'react'
import App from '../../components/layouts/App'
import ImportantAlerts from "./components/ImportantAlerts";
import Card from "../../components/Card";
import { checkAuth } from "../../lib/cookie";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser } from '../../actions/index';

import Wysiwyg from "../../components/crud/Wysiwyg";

class Dashboard extends Component {

    static async getInitialProps({ store, isServer, req, res }) {
        checkAuth(req, res);
        await store.dispatch(setUser(req));

        return { isServer }
    }

    render() {

        const { user } = this.props

        return (
            <App title="Dashboard">
                <Card title="Important alerts">
                    <ImportantAlerts />
                </Card>
                <Card>
                    <h1>{`Wellcome ${user.first_name}`}</h1>
                    <Wysiwyg value="" />
                </Card>
                <Card title="User">
                </Card>
                <Card title="Token">
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