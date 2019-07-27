import axios from "axios";
import { getToken } from "../lib/cookie";

const AUTH = "http://api.webmation.com";
const GATEWAY = "http://api.webmation.com/api";

export const getUser = async (req = null) => {

    let token = '';

    if (req) {
        token = getToken(req);
    } else {
        token = getToken();
    }

    const { data } = await axios.get(`${GATEWAY}/user`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });

    return data;
}

export const get = async (uri, req = null) => {

    const token = getToken(req);

    const { data } = await axios.get(`${ GATEWAY }${ uri }`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });

    return data;

}

export const post = async (uri, post) => {

    const token = getToken();

    const { data } = await axios.post(`${ GATEWAY }${ uri }`, post, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });

    return data;

}

export const auth = async (uri, post) => {
    const { data } = await axios.post(`${ AUTH }${ uri }`, post, {
        headers: {
            'Accept': 'application/json',
        }
    });

    return data;

}

