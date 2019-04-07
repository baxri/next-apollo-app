import React, { Component } from 'react'
import Router from 'next/router'
import { setToken } from "../../lib/cookie";
import { connect } from 'react-redux';
import { setAccessToken } from '../../actions/index';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: 'hersh.sandhoo@webmation.co',
            password: 'Hunter20!',
            loading: false,
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
        const client_secret = "Vr3g0ejeLLRuFcGuC88l7zHHfoqMWzpWWL1ygLKZ";

        this.setState({ loading: true });

        // Make fake authorisation
        setTimeout(() => {
            this.setState({ loading: false });

            setToken(`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNmODQ3YjM0MTNkMzQyMTI2NTIyZDM2M2M3OGJmZWM2Y2FhM2RlOWYxY2E0NWQ4ZDYzOTYxOGQ3NjJiZDRkYzdkZWY4MzU1ZDc5MGQyNzU4In0.eyJhdWQiOiIyIiwianRpIjoiY2Y4NDdiMzQxM2QzNDIxMjY1MjJkMzYzYzc4YmZlYzZjYWEzZGU5ZjFjYTQ1ZDhkNjM5NjE4ZDc2MmJkNGRjN2RlZjgzNTVkNzkwZDI3NTgiLCJpYXQiOjE1NTQ1NzcyNDEsIm5iZiI6MTU1NDU3NzI0MSwiZXhwIjoxNTg2MTk5NjQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.p1Yrujbz0K5pVRb18hRhrTNJDVn5OU-ZtGf6FGjHC7RgRPaWmhE3gEtPlSvc6q6ZyoNwmsz6vvxtNH2Lr68YFl8B4SisEnfnEh_3sDgcmocMEr1vwhERsMjnKheCWvvFAPcJEESnI0MixShrCXpncHGMQ1hDXt7hiQVf9QlJhLEgD9ZWgcXstn0bhwTklcNIY_xRA_86izRlce1C67HAuJ2utoWgGAS992saIUhnQZ4koYVMCkuV-k3Dew-5CIbU2PrMR883iehDi-x9j8uoXcpKoxW0pjtzA14kpuMmsbBiLCI2VcqNERR0VuEWxqi5JpIgiKZp3wihu9QdLJzaqK6tGX76dC1tFSZdLngyN5qxsYpKy2xjfisEiPv2b-JVHVMyU8q9DxG9pphpkjI-GHE0n1IHoW-rRpQN9Q9-lEpYHwDjoIo0s1WZop2Y82LQzzfmLFr0oUnhJad-epIzHwpIepn9fyehXXTcNcw2xXCMdnyf7ZroxfRYJgFipehiu6JI7xi06zz6uFtVeH_BhHvJAB_O6AqNFrz1Ccn9ky3dmN_vTnrTctsHFZkaDpvqKcQMJejENa1Mwm6QxTHdhKGaaTKUywvacOLIJ17jZrJXtZ2NPGW0fsk8d66Rxnu90dKAXT4pgWSOCFLYv_OtVJhuYlLRz1-_is7sfac-9jw`);

            Router.push('/dashboard');
        }, 1000);

        // setToken(`Bearer ${data.token.access_token}`);
        // Router.push('/dashboard');

        // action({ variables: { client_id, grant_type, username, password, client_secret } }).then(({ data }) => {
        //     setToken(`Bearer ${data.token.access_token}`);
        //     Router.push('/dashboard');
        // }).catch(err => {
        //     toast.error(err.graphQLErrors[0]['message']);
        // })
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

export default connect(mapStateToProps, { setAccessToken })(Login);
