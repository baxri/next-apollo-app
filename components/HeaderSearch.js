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
      <div>
        <form className="d-none d-md-block form-inline my-2 my-lg-0" onSubmit={event => this.onSubmit(event)}>
          <input className="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
        </form>

        <form className="d-block d-md-none form-inline my-2 my-lg-0" onSubmit={event => this.onSubmit(event)}>
          <div className="mobile-search row">
            <div className="col-10 col-sm-11">
              <input type="text" name="search" placeholder="What are you looking for?" />
            </div>
            <div className="col-2 col-sm-1">
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <style jsx>{`

              .mobile-search{
                position: fixed;
                top: 50px;
                background-color: white;
                width: 100%;
                height: 50px;
                line-height: 44px;
                /* border: 1px solid gray; */
                margin: 0px;
                z-index: 2;
                border-bottom: 1px solid lightgray;
              }
              
              .mobile-search input{
                width: 100%;
                outline: none;
                border: 0px solid white !important;
              }

              .mobile-search button{
                width: 100%;
                outline: none;
                border: 0px solid white;
                background-color: white;
              }

             
          
          `}</style>
        </form>
      </div>
    )
  }
}
