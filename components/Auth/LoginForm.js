import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import { LOGIN } from "../../gql/Auth";
import Router from 'next/router'

class Login extends Component {

    onSubmit = (e, LoginGql) => {
        e.preventDefault();

        const form = event.target
        const formData = new window.FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')

        LoginGql({ variables: { email, password } }).then(({ data }) => {

            //we need to save data.login.token in cookies
            // for now I will make static user id saving

            // You can use better way to save this cookies
            document.cookie = "Authorization=cjpzwwo5a00iy3410ilr5cam8";
            Router.push('/profile');
        });
    }

    render() {
        return (
            <Mutation mutation={LOGIN}>
                {(LoginGql, { loading, error }) => (
                    <form onSubmit={event => this.onSubmit(event, LoginGql)}>
                        <h1>Login</h1>
                        <input placeholder='Email' name='email' type='email' required />
                        <br />
                        <input placeholder='Password' name='password' type='password' required />
                        {error && <p>{error}</p>}
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
                )}
            </Mutation>
        )
    }
}


export default Login;
