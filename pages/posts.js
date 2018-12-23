import React, { Component } from 'react'
import App from '../components/App'
import Header from '../components/Header'
import Logout from '../components/Auth/Logout'
import PostList from '../components/PostList';
import { checkAuth } from "../lib/cookie";

class Posts extends Component {

    static async getInitialProps({ req, res }) {
        checkAuth(req, res);
        return {};
    }


    render() {
        return (
            <App>
                <Header />
                <Logout />
                <PostList />
            </App>
        )
    }
}

export default Posts;

