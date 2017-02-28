/* eslint-disable import/prefer-default-export */

import { SET_INITIAL_PATH } from '../constants';

export function setInitialPath({name, value}) {
  return {
    type: SET_INITIAL_PATH,
    payload: {
      name,
      value,
    },
  };
}
