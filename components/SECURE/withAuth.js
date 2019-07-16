import React, { Component } from 'react'
import { checkAuth } from "../../lib/cookie";

export default function withAuth(WrappedComponent) {

    return class extends Component {

        static async getInitialProps({ req, res, query }) {
            checkAuth(req, res);
            return { query };
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

