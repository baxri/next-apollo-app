import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import Router from 'next/router'
import { setToken } from "../lib/cookie";
import { TOKEN } from "../gql/User";
import Error from "./Error";
import Input from "./Input";
import Button from "./Button";

class Login extends Component {

    onSubmit = (e, action) => {
        e.preventDefault();

        const form = event.target
        const formData = new window.FormData(form)

        const client_id = 2;
        const grant_type = "password";
        const username = formData.get('email');
        const password = formData.get('password');
        const client_secret = "SL478kXxgXzFbJwME4oiFLskjKM3zLkfcokxeN3p";

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
                            <Input placeholder='Email' name='email' type='email' required />
                            <br />
                            <br />
                            <Input placeholder='Password' name='password' type='password' required />
                            <br />
                            <br />
                            <Button type='submit' className="btn btn-primary">{loading ? "Loading..." : "Login"}</Button>

                            <style jsx>{`
                            
                            `}</style>
                        </form>
                    )
                }}
            </Mutation>
        )
    }
}


export default Login;
