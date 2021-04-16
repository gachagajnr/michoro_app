/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as signupReducer from './signupReducer';
import * as initializeReducer from './initializeReducer';

import * as themeReducer from './themeReducer';
export default Object.assign(
  loginReducer,
  signupReducer,
  initializeReducer,
  loadingReducer,
  themeReducer,
);
