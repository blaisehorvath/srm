import { SET_INITIAL_PATH } from '../constants';

export default function path(state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_PATH:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
