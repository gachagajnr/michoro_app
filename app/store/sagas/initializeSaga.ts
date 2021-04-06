/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import fetchArt from 'app/services/initializeHome';
import * as initActions from 'app/store/actions/initializeActions';

// Our worker Saga that logins the user
export default function* initializeAsync() {
  yield put(initActions.enableLoader());
  //how to call api
  const response = yield call(fetchArt);

  //mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };
  console.log('FETCHING ARTS', response);
  if (response.data) {
    yield put(initActions.onArtsResponse(response.data));
    yield put(initActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(initActions.artsFailed());
    yield put(initActions.disableLoader());
  }
}
