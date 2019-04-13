import * as actionTypes from '../actions/types';

const initialState = {
  user: {},
  token: '',
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}