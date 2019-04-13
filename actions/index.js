import * as actionTypes from './types';
import axios from 'axios';

import { getToken } from "../lib/cookie";

import { getUser } from "../lib/http";

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        payload: token,
    }
}

export function setUser(req) {
    return dispatch => getUser(req)
        .then((data) => dispatch({ type: actionTypes.SET_USER, payload: data }));
}

