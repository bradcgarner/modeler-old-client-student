import * as actions from '../actions/general'
import { general as initialState } from './initial-state';

export const reducer = (state = initialState, action) => {

  if (action.type === actions.INITIALIZE) {
    return {...state, 
      et: action.et,
      coverings: action.coverings,
    };
  }

  else {
    return state;
  }

}