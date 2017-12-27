import * as actions from '../actions/project';
import { project as initialState } from './initial-state';
import { selectArea } from '../actions/project';

export const reducer = (state = initialState, action) => {

  if (action.type === actions.LOAD_PROJECT) {
    return {...state, 
      name: action.name,
      areas: action.areas,  
    };
  }

  else if (action.type === actions.SELECT_AREA) {
    let focus = 0; // so we default to something vs undefined
    for (let key in state.areas) {
      if (state.areas[key].name === action.areaName) {
        focus = state.areas[key].id
      }
    }
    const areas = {...state.areas, focus}
    return {...state, areas };
  }

  else if (action.type === actions.ADD_AREA) {
    let id = 0;
    for (let key in state.areas) {
      if (state.areas[key].id >= id) {
        id = state.areas[key].id + 1;
      }
    }
    const newArea = { 
      id,
      name: 'new area',
      area: null,
      product: null, 
      runoff: null,   
      cda: null,
      slope: null,
      etTable: null, 
    };
    const list = [...state.areas.list, newArea.name];
    const areas = {...state.areas, [id]: newArea, list, focus: id }
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