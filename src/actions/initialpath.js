/* eslint-disable import/prefer-default-export */

import { SET_PATH } from '../constants';

export function setPath({name, value}) {
  return {
    type: SET_PATH,
    payload: {
      name,
      value,
    },
  };
}
