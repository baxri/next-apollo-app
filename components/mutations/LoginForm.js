import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import Router from 'next/router'
import { setToken } from "../../lib/cookie";
import { TOKEN } from "../../gql/User";
import Error from "../Error";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: 'hersh.sandhoo@webmation.com',
            password: 'Hunter20!',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (e, action) => {
        e.preventDefault();

        const form = event.target
        const formData = new window.FormData(form)

        const client_id = 2;
        const grant_type = "password";
        const username = formData.get('email');
        const password = formData.get('password');
        // const client_secret = "SL478kXxgXzFbJwME4oiFLskjKM3zLkfcokxeN3p";
        const client_secret = "Vr3g0ejeLLRuFcGuC88l7zHHfoqMWzpWWL1ygLKZ";

        action({ variables: { client_id, grant_type, username, password, client_secret } }).then(({ data }) => {
            setToken(`Bearer ${data.token.access_token}`);
            Router.push('/dashboard');
        }).catch(err => { })
    }

    render() {
        return (
            <Mutation mutation={TOKEN}>
                {(action, { loading, error }) => {
                    return (
                        <form onSubmit={event => this.onSubmit(event, action)}>
                            {error && <Error error={error} />}
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
                }}
            </Mutation>
        )
    }
}

export default Login;
