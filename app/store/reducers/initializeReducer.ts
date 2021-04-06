/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IHomeState } from 'app/models/reducers/initialize';
import {
  // IHomeRequestState,
  IHomeResponseState,
} from 'app/models/actions/initialize';

const initialState: IHomeState = {
  arts: [],
  arts_error: '',
};

export const loginReducer = createReducer(initialState, {
  [types.ARTS_REQUEST](state: IHomeState, ) {
    return {
      ...state,
    };
  },
  [types.ARTS_LOADING_ENDED](state: IHomeState) {
    return { ...state };
  },
  [types.ARTS_RESPONSE](state: IHomeState, action: IHomeResponseState) {
    return {
      ...state,
      arts: action.response,
    };
  },
  [types.ARTS_FAILED](state: IHomeState, action: IHomeResponseState) {
    return {
      ...state,
      arts_error: action.response,
    };
  },
});
