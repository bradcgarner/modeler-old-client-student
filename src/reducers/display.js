import * as actions from '../actions/display'
import { display as initialState } from './initial-state';

export const reducer = (state = initialState, action) => {

  if (action.type === actions.GO_TO) {
    return {...state, action};
  }

  else {
    return state;
  }

}