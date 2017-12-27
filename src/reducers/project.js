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

  if (action.type === actions.LOAD_GENERAL_SETTINGS) {
    const general = {...state.general, 
      area: action.area, 
      volume: action.volume,
      thickness: action.thickness,
    }
    return {...state, general };
  }
  if (action.type === actions.LOAD_AREA) {
    const newAreas = {...state.areas,
      [action.id]: {
        id: action.id,
        name: action.name,
        area: action.area,
        product: action.product,
        runoff: action.runoff,
        cda: action.cda,
        slope: action.slope,
        etTable: action.etTable,
      },
      focus: action.id,
    }
    const list = [];
    for (let key in newAreas) {
      if (areas[key].name) {
        list.push(newAreas[key].name)
      }
    }
    const areas = {...newAreas, list}
    return {...state, areas };
  }

  if (action.type === actions.LOAD_STORM_SETTINGS) {
    const general = {...state.general, 
      controlledRate: action.controlledRate,
      controlledHi: action.controlledHi,
      controlledLo: action.controlledLo,
    }
    return {...state, general };
  }

  if (action.type === actions.LOAD_SAVED_STORMS) {
    const general = {...state.general, 
      controlledRate: action.controlledRate,
      controlledHi: action.controlledHi,
      controlledLo: action.controlledLo,
    }
    return {...state, general };
  }

  if (action.type === actions.LOAD_STORM_SETTINGS) {
    const general = {...state.general, 
      intervalMins: action.intervalMins,
      eventGapThreshold: action. eventGapThreshold,
    }
    return {...state, general };
  }

  if (action.type === actions.LOAD_IMPORTED_STORMS) {
    const general = {...state.general, 
      type: actions.LOAD_IMPORTED_STORMS,
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

  if (action.type === actions.LOAD_CONTROLLED_SETTINGS) {
    const general = {...state.general, 
      controlledRate: action.controlledRate,
      controlledHi: action.controlledHi,
      controlledLo: action.controlledLo,
    }
    return {...state, general };
  }

  if (action.type === actions.LOAD_ANALYSIS_SETTINGS) {
    const analysisSettings = {...state.analysisSettings, 
      xxx: action.xxx,
    }
    return {...state, analysisSettings };
  }

  if (action.type === actions.LOAD_RANGE_SETTINGS) {
    const rangeSettings = {...state.rangeSettings, 
      startMonth: action.startMonth,
      startDay: action.startDay,
      endMonth: action.endMonth,
      endDay: action.endDay,
      startEvent: action.startEvent,
      endEvent: action.endEvent,    }
    return {...state, rangeSettings };
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