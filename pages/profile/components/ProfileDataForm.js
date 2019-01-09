import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.user;
    }

    handleCahange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="form-control" name="first_name" id="first_name" onChange={this.handleCahange} value={this.state.first_name} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" name="last_name" id="last_name" onChange={this.handleCahange} value={this.state.last_name} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" onChange={this.handleCahange} value={this.state.email} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
