import axios from "axios";
import { getToken } from "../lib/cookie";

const GATEWAY = "https://beta.webmation.net/api";

export const get = async (uri) => {

    const token = getToken();

    const { data } = await axios.get(`${GATEWAY}${uri}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });

    return data;

}

export const post = async (uri, post) => {

    const token = getToken();

    const { data } = await axios.post(`${GATEWAY}${uri}`, post, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });

    return data;

}

