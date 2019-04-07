import React, { Component } from 'react'

export default class Field extends Component {
    render() {

        const { schema, name, handleChange, value } = this.props;

        switch (schema.type) {
            case 'text':
                return (
                    <React.Fragment>
                        <div className="col-12 col-md-6 form-group" key={name}>
                            <label htmlFor={name}>{schema.label}</label>
                            <input type="text" name={name} onChange={handleChange} value={value} className="form-control" id={name} aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </React.Fragment>
                )
            case 'select':
                return (
                    <React.Fragment>
                        <div className="col-12 col-md-6 form-group" key={name}>
                            <label htmlFor={name}>{schema.label}</label>
                            <select className="form-control" id={name} onChange={handleChange} name={name}>
                                {schema.options.map(option => {
                                    return <option key={option.value} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </div>
                    </React.Fragment>
                )
            case 'date':
                return (
                    <React.Fragment>
                        <div className="col-12 col-md-6 form-group" key={name}>
                            <label htmlFor={name}>{schema.label}</label>
                            <input type="text" name={name} onChange={handleChange} value={value} className="form-control" id={name} aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </React.Fragment>
                )
        }


    }
}
