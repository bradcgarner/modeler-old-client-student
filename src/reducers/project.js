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

  else if (action.type === actions.UPDATE_AREA_MINUTES) {
    const minuteTracker = {...state.storms.minuteTracker, [action.id]:action.value};
    let allMinutes = 0;
    for(let key in minuteTracker) {
      allMinutes += minuteTracker[key]
    }
    const totalDays         = Math.floor(allMinutes / 1440);
    const grandTotalHours   = allMinutes % 1440 ;
    const totalHours        = Math.floor(grandTotalHours / 60);
    const grandTotalMinutes = grandTotalHours % 60 ;
    const totalMinutes      = Math.floor(grandTotalMinutes);
    const storms = {...state.storms, minuteTracker, totalDays, totalHours, totalMinutes, allMinutes };

    return {...state, storms };
  }

  else if (action.type === 'PLACEHOLDER') {
    console.log('placeholder dispatched')
    return state;
  }

  else {
    return state;
  }

}