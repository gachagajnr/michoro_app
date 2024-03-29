/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put,call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import signupUser from 'app/services/signupUser';
import * as signupActions from 'app/store/actions/signupActions';

// Our worker Saga that logins the user
export default function* signupAsync(action:any) {
  yield put(signupActions.enableLoader());
   //how to call api
   const response = yield call(signupUser, action.username, action.email, action.password);
  console.log("SIGNUP RESPONSE",response)
  // const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.id) {
    yield put(signupActions.onSignupResponse(response.id));
    yield put(signupActions.disableLoader());
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    console.log(response)
    yield put(signupActions.signupFailed());
    yield put(signupActions.disableLoader());   
  }
}
