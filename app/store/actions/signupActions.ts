/*
 * Reducer actions related with SIGNUP
 */
import * as types from './types';
import { ISignupResponse } from 'app/models/api/signup';

export function requestSignup(username: string,email:string, password: string) {
  return {
    type: types.SIGNUP_REQUEST,
    username,
    email,
    password,
  };
}

export function signupFailed() {
  return {
    type: types.SIGNUP_FAILED,
  };
}

export function onSignupResponse(response: ISignupResponse) {
  return {
    type: types.SIGNUP_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.SIGNUP_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.SIGNUP_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
