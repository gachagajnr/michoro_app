// export action creators
import * as loginActions from './loginActions';
import * as signupActions from './signupActions';

import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  signupActions,
  navigationActions,
  themeActions,
);
