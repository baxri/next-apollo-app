import * as actionTypes from './types';
import axios from 'axios';

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        payload: token,
    }
}

export function setUser() {
    return dispatch => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(({ data }) => dispatch({ type: actionTypes.SET_USER, payload: data }));
}

