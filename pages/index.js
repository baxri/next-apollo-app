import React, { Component } from 'react'
import AppPublic from '../components/AppPublic'
import LoginForm from '../components/LoginForm'
import { checkAuthForPublic } from "../lib/cookie";

export default class componentName extends Component {

  static async getInitialProps({ req, res }) {
    checkAuthForPublic(req, res);
    return {};
  }

  render() {
    return (
      <AppPublic title="Login page">
        <LoginForm />
      </AppPublic>
    )
  }
}

