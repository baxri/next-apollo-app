import React, { Component } from 'react'
import Router from 'next/router'

export default class HeaderSearch extends Component {

  onSubmit = async (e, client) => {
    e.preventDefault();

    const form = event.target
    const formData = new window.FormData(form)
    const search = formData.get('search');
    Router.push(`/search?search=${search}`);
  }


  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={event => this.onSubmit(event)}>
        <input className="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}
