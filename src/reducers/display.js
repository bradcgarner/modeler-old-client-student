import * as actions from '../actions/display'
import { display as initialState } from './initial-state';

export const display = (state = initialState, action) => {

  if (action.type === actions.CHANGE_VIEW) {
    return {...state, view: action.view};
  }

  if (action.type === actions.TOGGLE_MODAL) {
    return {...state, modal: action.modal, message: action.message};
  }

  if (action.type === actions.FOCUS_AREA) {
    return {...state, focusArea: action.focusArea };
  }

  if (action.type === actions.FOCUS_ET) {
    return {...state, focusEt: action.focusEt };
  }

  if (action.type === actions.FOCUS_COVERING) {
    return {...state, focusCovering: action.focusCovering };
  }

  if (action.type === actions.UPDATE_STORM_MINUTES) {
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
    const storms = {...state.storms, totalMinutes, minuteTracker, totalDays, totalHours, allMinutes };

    return {...state, storms };
  }

  if (action.type === actions.LOAD_STORMS_IMPORTED) {
    const general = {...state.general, 
      stormData: action.stormData,
      source: action.source,
      location: action.location,
      startMonth: action.startMonth,
      startDay: action.startDay,
      endMonth: action.endMonth,
      endDay: action.endDay,
    }
    return {...state, general };
  }

  if(action.type ===  actions.TOGGLE_ANALYSIS_RANGE) {
    return {...state, analysisRange: action.analysisRange}
  }

  else {
    return state;
  }

}