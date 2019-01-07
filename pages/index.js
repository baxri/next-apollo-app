import React, { Component } from 'react'
import AppPublic from '../components/AppPublic'
import LoginForm from '../components/LoginForm'
import { checkAuthForPublic } from "../lib/cookie";
import Card from "../components/Card";
import SocialIcons from "../components/SocialIcons";

export default class componentName extends Component {

  static async getInitialProps({ req, res }) {
    checkAuthForPublic(req, res);
    return {};
  }

  render() {
    return (
      <AppPublic title="Login page">
        <div className="row justify-content-center">
          <div className="col-6">
            <Card title="Login">
              <LoginForm />
            </Card>
          </div>
          <div className="col-6">
            <Card title="Not a member?">
              <p>
                Create your account today:
              Learn how Webmation's SAAS platform will help your business increase sales,
              productivity, revenue streams, cost savings, client satisifcation and communication.
              </p>
            </Card>
            <SocialIcons />
          </div>

          <style jsx>{`
          
            p{
              font-size: 10pt;
            }

          `}</style>
        </div>
      </AppPublic>
    )
  }
}

