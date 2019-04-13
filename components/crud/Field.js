import React, { Component } from 'react'

import Wysiwyg from "../crud/Wysiwyg";
import DatePicker from "./DatePicker";

export default class Field extends Component {
    render() {

        const { schema, name, handleChange, value, errors } = this.props;

        const isInvalid = errors[name] ? 'is-invalid' : '';


        switch (schema.type) {
            case 'text':
                return (
                    <React.Fragment>
                        <div className="col-12 col-md-4 form-group " key={name}>
                            <label htmlFor={name}>{schema.label}</label>
                            <input type="text" name={name} onChange={handleChange} value={value} className={`${isInvalid} form-control`} id={name} aria-describedby="emailHelp" placeholder={schema.placeholder} />
                            <small id="emailHelp" className="invalid-feedback">{errors[name]}</small>
                        </div>
                    </React.Fragment>
                )
            case 'editor':
                return (
                    <React.Fragment>
                        <div className="col-12 form-group " key={name}>
                            <label htmlFor={name}>{schema.label}</label>
                            <Wysiwyg name={name} value={value} onChange={handleChange} />
                        </div>
                    </React.Fragment>
                )
            case 'select':
                return (
                    <React.Fragment>
                        <div className="col-12 col-md-4 form-group" key={name}>
                            <label htmlFor={name}>{schema.label}</label>
                            <select className="form-control" id={name} onChange={handleChange} name={name} defaultValue={value}>
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
                        <div className="col-12 col-md-4 form-group " key={name}>
                            <DatePicker name={name} onChange={handleChange} value={value}>
                                <label htmlFor={name}>{schema.label}</label>
                                <input type="text" name={name} onChange={handleChange} value={value} className={`${isInvalid} form-control`} id={name} aria-describedby="emailHelp" placeholder={schema.placeholder} />
                            </DatePicker>
                            <small id="emailHelp" className="invalid-feedback">{errors[name]}</small>
                        </div>
                    </React.Fragment>
                )
        }


    }
}
