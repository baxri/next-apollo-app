import { combineReducers } from 'redux';

import auth from './auth';
import website from './website';
// ... other reducers

export default combineReducers({
  auth,
  website
  // ... other reducers
});