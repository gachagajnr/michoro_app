/* Signup Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ISignupState } from 'app/models/reducers/signup';
import {
  ISignupRequestState,
  ISignupResponseState,
} from 'app/models/actions/signup';
const initialState: ISignupState = {
  isLoggedIn: false,
  email:'',
  username: '',
  password: '',
};

export const loginReducer = createReducer(initialState, {
  [types.SIGNUP_REQUEST](state: ISignupState, action: ISignupRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
      email:action.email
    };
  },
  [types.SIGNUP_LOADING_ENDED](state: ISignupState) {
    return { ...state };
  },
  [types.SIGNUP_RESPONSE](state: ISignupState, action: ISignupResponseState) {
    return {
      ...state,
      id: action.response.id,
     };
  },
  [types.SIGNUP_FAILED](state: ISignupState) {
    return {
      ...state,
     };
  },
  [types.LOG_OUT](state: ISignupState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});