import { combineReducers } from 'redux';

import auth from './auth';
import websites from './websites';
// ... other reducers

export default combineReducers({
  auth,
  websites
  // ... other reducers
});