import * as actions from '../actions/user'
import { user as initialState } from './initial-state';

export const reducer = (state = initialState, action) => {

  if (action.type === actions.LOAD_USER) {
    return {...state, action};
  }

  else {
    return state;
  }

}