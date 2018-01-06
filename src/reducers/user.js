import * as actions from '../actions/user'
import { user as initialState } from './initial-state';

export const user = (state = initialState, action) => {

  if (action.type === actions.LOAD_USER) {
    return {action};
  }

  else {
    return state;
  }

}