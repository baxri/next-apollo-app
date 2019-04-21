import * as actionTypes from './types';
import { getUser, get } from "../lib/http";

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        payload: token,
    }
}

export function setUser(req) {
    return dispatch => getUser(req)
        .then((data) => dispatch({ type: actionTypes.SET_USER, payload: data }))
        .catch(err => { console.log(err.message) });
}

export function setWebsite(id, req) {
    return dispatch => get(`/websites/${id}`, req)
        .then((data) => dispatch({ type: actionTypes.SET_WEBSITE, payload: data }))
        .catch(err => { console.log(err.message) });
}

