/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga';
import initializeSaga from './initializeSaga';



export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.SIGNUP_REQUEST, signupSaga)]);
  yield all([takeEvery(types.ARTS_REQUEST, initializeSaga)]);


}
