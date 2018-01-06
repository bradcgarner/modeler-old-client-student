import * as actions from '../actions/project';
import { project as initialState } from './initial-state';

export const project = (state = initialState, action) => {

  if (action.type === actions.LOAD_PROJECT) {
    return {...state, 
      name: action.name,
      units: action.units,
      intervals: action.intervals,
      controlled: action.controlled,
      areas: action.areas,  
      storms: action.storms,
      events: action.events,
      rangeSettings: action.rangeSettings,
    };
  }

  if (action.type === actions.LOAD_AREAS) {
    return {...state, areas: action.areas };
  }

  if (action.type === actions.ADD_AREA) {
    let hiKey = 0;
    for (let key in state.areas) {
      hiKey = ( typeof key === 'number' && key > hiKey ) ? key : hiKey ;
    }
    const area = {
      id: hiKey + 1,
      name: '',
      area: null,
      covering: state.areas[state.areas.focus].covering,
      runoff: null,
      cda: [],
      slope: state.areas[state.areas.focus].slope,
      etTable: state.areas[state.areas.focus].etTable,
    };
    const areas = {...state.areas, hiKey: area};
    return {...state, areas };
  }

  if (action.type === actions.LOAD_UNITS) {
    return {...state, units: action.units };
  }

  if (action.type === actions.LOAD_INTERVALS) {
    return {...state, intervals: action.intervals };
  }

  if (action.type === actions.LOAD_CONTROLLED) {
    return {...state, controlled: action.controlled };
  }

  if (action.type === actions.LOAD_STORM_SETTINGS) {
    return {...state, stormSettings: action.stormSettings };
  }

  if (action.type === actions.LOAD_RAN_INTERVALS) {
    return {...state, ranIntervals: action.ranIntervals };
  }

  if (action.type === actions.LOAD_RAN_CONTROLLED) {
    return {...state, ranControlled: action.ranControlled };
  }

  if (action.type === actions.LOAD_RAN_STORM_SETTINGS) {
    return {...state, ranStormSettings: action.ranStormSettings };
  }

  if (action.type === actions.LOAD_ANALYSIS_SETTINGS) {
    const rangeSettings = {...state.rangeSettings, 
      startMonth: action.startMonth,
      startDay: action.startDay,
      endMonth: action.endMonth,
      endDay: action.endDay,
      startEvent: action.startEvent,
      endEvent: action.endEvent,    }
    return {...state, rangeSettings };
  }

  else {
    return state;
  }

}