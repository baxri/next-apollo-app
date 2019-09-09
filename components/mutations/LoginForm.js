import React, { Component } from 'react'
import Router from 'next/router'
import { setToken } from "../../lib/cookie";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import NProgress from "nprogress";

import { auth } from "../../lib/http";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: 'hersh.sandhoo@webmation.com',
            password: 'Hunter20!',
            loading: false,
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = async (e, action) => {
        e.preventDefault();

        const form = event.target
        const formData = new window.FormData(form)

        const client_id = 2;
        const grant_type = "password";
        const username = formData.get('email');
        const password = formData.get('password');
        const client_secret = "8nmguuD26hrXngiKE9maUqaetBNYoQrceYLjTgicc";
        NProgress.start();
        this.setState({ loading: true });
        
        try {
            const { access_token } = await auth(`/oauth/token`, {
                client_id,
                grant_type,
                username,
                password,
                client_secret
            });
            setToken(`Bearer ${access_token}`);
            Router.push('/dashboard');
        } catch (err) {
            NProgress.done();
            this.setState({ loading: false });

            if (err.response) {
                toast.error(err.response.data.message);
            } else {
                toast.error(err.message);
            }
        }
    }
    render() {
        const { loading } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} type='email' required />
                <br />
                <br />
                <input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' required />
                <br />
                <br />
                <button type='submit' className="btn btn-primary">{loading ? "Loading..." : "Login"}</button>
                <style jsx>{`
                    input{
                        width: 100%;
                        height: 40px;
                        padding-left: 10px; 
                        outline: none;
                        border: 1px solid lightgray;
                    }
                    button{
                        border: 1px solid lightgray;
                        height: 50px;
                        padding-left: 10px; 
                        outline: none;
                        width : 100%;
                        border-radius: 0px;
                        background-color: #2280bd;
                    }
                    button:hover{
                        background-color: #206694;
                    }
                `}</style>
            </form>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    token: auth.token
})

export default connect(mapStateToProps, {})(Login);
