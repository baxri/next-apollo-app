import React from 'react'

import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
// import initStore from '../store/index'
import initStore from '../store'
import Router from 'next/router';

import css from "../static/css/empty.css";

export default withRedux(initStore)(class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  }
})
