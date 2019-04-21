import * as actionTypes from './types';
import { get } from "../lib/http";

export function setWebsite(id, req) {
    return dispatch => {
        return get(`/websites/${id}`, req)
            .then(({ data }) => dispatch({ type: actionTypes.SET_WEBSITE, payload: data }))
            .catch(err => { console.log(err.message) });
    }
}

