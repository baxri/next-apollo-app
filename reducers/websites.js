import * as actionTypes from '../actions/types';

const initialState = {
  website: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_WEBSITE:
      return {
        ...state,
        website: action.payload,
      };
    default:
      return state;
  }
}