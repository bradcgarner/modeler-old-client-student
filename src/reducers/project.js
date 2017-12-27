import * as actions from '../actions/project';
import { project as initialState } from './initial-state';

export const reducer = (state = initialState, action) => {

  if (action.type === actions.LOAD_PROJECT) {
    return {...state, 
      name: action.name,
      areas: action.areas,  
    };
  }

  else if (action.type === actions.SELECT_AREA) {
    const areas = {...state.areas, focusNum: action.focusNum}
    return {...state, areas };
  }

  else if (action.type === actions.ADD_AREA) {
    const list = [...state.areas.list, action.name];
    const areas = {...state.areas, [action.id]: areas, list }
    return {...state, areas };
  }

  else if (action.type === 'PLACEHOLDER') {
    console.log('placeholder dispatched')
    return state;
  }

  else {
    return state;
  }

}