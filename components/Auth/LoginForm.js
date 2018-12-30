import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import Router from 'next/router'
import { setToken } from "../../lib/cookie";
import { TOKEN } from "../../gql/Token";
import Error from "./Error";

class Login extends Component {

    onSubmit = (e, TokenGql) => {
        e.preventDefault();

        const form = event.target
        const formData = new window.FormData(form)

        const client_id = 2;
        const grant_type = "password";
        const username = formData.get('email');
        const password = formData.get('password');
        const client_secret = "SL478kXxgXzFbJwME4oiFLskjKM3zLkfcokxeN3p";

        TokenGql({ variables: { client_id, grant_type, username, password, client_secret } }).then(({ data }) => {
            setToken(data.token.access_token);
            Router.push('/');
        }).catch(err => { })
    }

    render() {
        return (
            <Mutation mutation={TOKEN}>
                {(TokenGql, { loading, error }) => {
                    return (
                        <form onSubmit={event => this.onSubmit(event, TokenGql)}>
                            {error && <Error error={error} />}
                            <h1>Login</h1>
                            <input placeholder='Email' name='email' type='email' value="hersh.sandhoo@webmation.com" required />
                            <br />
                            <input placeholder='Password' name='password' type='password' value="Hunter20!" required />

                            <button type='submit'>{loading ? "Loading..." : "Login"}</button>
                            <style jsx>{`
                                form {
                                    border-bottom: 1px solid #ececec;
                                    padding-bottom: 20px;
                                    margin-bottom: 20px;
                                }
                                h1 {
                                    font-size: 20px;
                                }
    
                                button{
                                    height: 30px;
                                }
    
                                input {
                                    display: block;
                                    margin-bottom: 10px;
                                    width: 200px;
                                    height: 30px;
                                    border: 1px solid gray;
                                    padding-left: 10px;
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
