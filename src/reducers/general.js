import * as actions from '../actions/general'
import { general as initialState } from './initial-state';

export const general = (state = initialState, action) => {

  if (action.type === actions.LOAD_INITIALIZE && !state.initialized) {
    const flatStates = state.states.map(state=> state.name);
    const flatCountries = state.countries.map(country=>country.name);
    return {...state,
      initialized: true,
      et: action.et,
      coverings: action.coverings,
      states: flatStates,
      countries: flatCountries,
    };
  }

  else {
    return state;
  }

}