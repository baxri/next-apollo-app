import React, { Component } from 'react'

export default class Field extends Component {
    render() {

        const { schema, name, handleChange, value } = this.props;

        return (
            <React.Fragment>
                <div className="col-12 col-md-6 form-group" key={name}>
                    <label htmlFor="exampleInputEmail1">{schema.label}</label>
                    <input type="text" name={name} onChange={handleChange} value={value} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
            </React.Fragment>
        )
    }
}
