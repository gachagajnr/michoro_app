/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IHomeResponse } from 'app/models/api/initialize';

export function requestArts() {
  return {
    type: types.ARTS_REQUEST,
  };
}

export function artsFailed() {
  return {
    type: types.ARTS_FAILED,
  };
}

export function onArtsResponse(response: IHomeResponse) {
  return {
    type: types.ARTS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ARTS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ARTS_DISABLE_LOADER,
  };
}
