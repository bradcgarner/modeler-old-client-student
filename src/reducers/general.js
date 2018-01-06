import * as actions from '../actions/general'
import { general as initialState } from './initial-state';

export const general = (state = initialState, action) => {

  if (action.type === actions.LOAD_INITIALIZE) {
    return {...state, 
      et: action.et,
      coverings: action.coverings,
    };
  }

  else {
    return state;
  }

}