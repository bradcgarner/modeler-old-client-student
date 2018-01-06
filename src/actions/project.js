import 'whatwg-fetch';
import { REACT_APP_BASE_URL } from '../config'
import * as actionsDisplay from './display';
import * as helpers from './helpers';

export const LOAD_PROJECT = 'LOAD_PROJECT';
export const loadProject = project => ({ // all keys for full project
  type: LOAD_PROJECT,
  name: project.name,
  units: project.units,
  intervals: project.intervals,
  controlled: project.controlled,
  areas: project.areas,
  storms: project.storms,
  events: project.events,
  rangeSettings: project.rangeSettings,
});

export const LOAD_AREAS = 'LOAD_AREAS';
export const loadAreas = areas => ({
  type: LOAD_AREAS,
  areas,
});

export const ADD_AREA = 'ADD_AREA';
export const addArea = () => ({
  type: ADD_AREA,
});

export const LOAD_UNITS = 'LOAD_UNITS';
export const loadUnits = units => ({
  type: LOAD_UNITS,
  units,
});

export const LOAD_INTERVALS = 'LOAD_INTERVALS';
export const loadIntervals = intervals => ({
  type: LOAD_INTERVALS,
  intervals,
});

export const LOAD_CONTROLLED = 'LOAD_CONTROLLED';
export const loadControlled = controlled => ({
  type: LOAD_CONTROLLED,
  controlled,
});

export const LOAD_STORM_SETTINGS = 'LOAD_STORM_SETTINGS';
export const loadStormSettings = stormSettings => ({ // all keys for full project
  type: LOAD_STORM_SETTINGS,
  stormSettings,
});

export const LOAD_RAN_INTERVALS = 'LOAD_RAN_INTERVALS';
export const loadRanIntervals = intervals => ({
  type: LOAD_RAN_INTERVALS,
  intervals,
});

export const LOAD_RAN_CONTROLLED = 'LOAD_RAN_CONTROLLED';
export const loadRanControlled = controlled => ({
  type: LOAD_RAN_CONTROLLED,
  controlled,
});

export const LOAD_RAN_STORM_SETTINGS = 'LOAD_RAN_STORM_SETTINGS';
export const loadRanStormSettings = stormSettings => ({ // all keys for full project
  type: LOAD_RAN_STORM_SETTINGS,
  stormSettings,
});

export const LOAD_ANALYSIS_SETTINGS = 'LOAD_ANALYSIS_SETTINGS';
export const loadAnalysisSettings = settings => ({
  type: LOAD_ANALYSIS_SETTINGS,
  startMonth: settings.startMonth,
  startDay: settings.startDay,
  endMonth: settings.endMonth,
  endDay: settings.endDay,
  startEvent: settings.startEvent,
  endEvent: settings.endEvent,
});

// @@@@@@@@@@@@@@@ TEMP FAKER OPTIONS @@@@@@@@@@@@@@@@@


const tempProject = {
  name: 'fetched project',
  general: {
    intervalMins: 5,
    eventGapThreshold: 480,
    area: 'sf', 
    volume: 'gallons',
    thickness: 'inches',
    controlledRate: 0.002,
    controlledHi: 70,
    controlledLo: 0
  },
  areas: {
    focus: 0,        // area id primary key
    list: [ 'a','b','c' ],    // used for value lists
    0: {             // area id primary key
      id: 0,         // area id primary key
      name: 'a',      // text name
      area: 0,       // integer
      covering: 0,   // covering id foreign key
      runoff: 0,   // area id foreign key
      cda: [0,0,0], // area ids foreign keys
      slope: 0,      // integer %
      etTable: 0,         // table id foreign key
    }, 
    1: {             // area id primary key
      id: 1,         // area id primary key
      name: 'b',      // text name
      area: 0,       // integer
      covering: 0,   // covering id foreign key
      runoff: 0,   // area id foreign key
      cda: [1], // area ids foreign keys
      slope: 0,      // integer %
      etTable: 0,         // table id foreign key
    }, 
    2: {             // area id primary key
      id: 1,         // area id primary key
      name: 'c',      // text name
      area: 0,       // integer
      covering: 0,   // covering id foreign key
      runoff: 0,   // area id foreign key
      cda: [1], // area ids foreign keys
      slope: 0,      // integer %
      etTable: 0,         // table id foreign key
    }, 
  },
  coverings: {},    // copy of coverings used in areas for hash-type reference
  events: [1,2,3], // list of all events, generated at runtime, used for selection list
  storms: {
    totalMinutes: 0, // single-purpose value to summarize all values below,
    minuteTracker: { // single-purpose object to add up all minutes on the form; used at input, ignored at submission
      0: 0,
      1: 0,
    }
  }
};

// @@@@@@@@@@@@@@@ ASYNC @@@@@@@@@@@@@@@@@

export const projectAPICall = (url, init, callback) => dispatch => {

  // console.log('just before',init)
  return fetch(url, init)   
  .then(project=>{ 
    if (!project.ok) { 
      return Promise.reject(project.statusText);
    }
    return project.json();
  })
  .then(project=>{
    console.log('project returned', project);
    const {
      name, locationCity, locationState, locationCountry,
      areas, 
      area, volume, thickness,
      intervalMins, eventGapThreshold,
      controlledRate, controlledHi, controlledLo,
      source, location, startMonth, startDay, endMonth, endDay, stormData,
      ranIntervalMins, ranEventGapThreshold,
      ranControlledRate, ranControlledHi, ranControlledLo,
      ranSource, ranLocation, ranStartMonth, ranStartDay, ranEndMonth, ranEndDay, ranStormData,
      analysisStartMonth, analysisStartDay, analysisEndMonth, analysisEndDay, analysisStartEvent, analysisEndEvent,
    } = project;

    const units = {area, volume, thickness};
    const areaObject = helpers.arrayToObject(project.areas, 'id');
    const areasList = project.areas.map(area=>area.name);
    areaObject.list = areasList;

    const intervals = {intervalMins, eventGapThreshold}; 
    const controlled = {controlledRate, controlledHi, controlledLo};
    const stormSettings = {source, location, startMonth, startDay, endMonth, endDay, stormData};

    const ranIntervals = {ranIntervalMins, ranEventGapThreshold}; 
    const ranControlled = {ranControlledRate, ranControlledHi, ranControlledLo};
    const ranStormSettings = {ranSource, ranLocation, ranStartMonth, ranStartDay, ranEndMonth, ranEndDay, ranStormData};
    
    const analysisSettings = {analysisStartMonth, analysisStartDay, analysisEndMonth, analysisEndDay, analysisStartEvent, analysisEndEvent};

    const formattedProject = {
      name, 
      locationCity, locationState, locationCountry,
      units, 
      areas: areaObject,
      intervals,    controlled,    stormSettings,
      ranIntervals, ranControlled, ranStormSettings,
      analysisSettings,
    };

    let focus = project.areas.length > 0 ? project.areas[0] : null;
    let focusArea = focus ? focus.id : 0;
    let focusEt = focus ? focus.etTable : 0;
    let focusCovering = focus ? focus.covering : 0;

    switch (callback.loadto) {
      case 'project':
        dispatch(actionsDisplay.focusArea(focusArea));
        dispatch(actionsDisplay.focusEt(focusEt));
        dispatch(actionsDisplay.focusCovering(focusCovering));
        dispatch(loadProject(formattedProject));
        break;
      case 'areas':
        dispatch(loadAreas(formattedProject.areas));
        break;
      case 'units':
        dispatch(loadUnits(formattedProject.units));
        break;
      case 'intervals':
        dispatch(loadIntervals(formattedProject.intervals));
        break;
      case 'controlled':
        dispatch(loadControlled(formattedProject.controlled));
        break;
      case 'stormSettings':
        dispatch(loadStormSettings(formattedProject.stormSettings));
        break;
      case 'ranIntervals':
        dispatch(loadRanIntervals(formattedProject.ranintervals));
        break;
      case 'ranControlled':
        dispatch(loadRanControlled(formattedProject.ranControlled));
        break;
      case 'ranStormSettings':
        dispatch(loadRanStormSettings(formattedProject.ranStormTableRan));
        break;
      case 'analysisSettings':
        dispatch(loadAnalysisSettings(formattedProject.analysisSettings));
        break;
      case 'run':
        console.log('WHAT DO WE WANT TO LOAD NOW?');
        break;
      default:
      console.log('invalid selection');
    }
    return dispatch(actionsDisplay.changeView('normal'));
  })
  .catch(error => {
    // console.log('error',error);
    dispatch(actionsDisplay.changeView('normal'));
    return dispatch(actionsDisplay.toggleModal(true, error));
  })
}

// @@@@@@@@@@@@@@@ ASYNC HEADER/URL FORMATTING @@@@@@@@@@@@@@@@@


export const fetchProject = (projectId, authToken) => dispatch => {

  dispatch(actionsDisplay.changeView('loading'));
  
  const url = `${REACT_APP_BASE_URL}/api/projects/${projectId}`;
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${authToken}`, 
  }; 
  const init = { 
    method: 'GET',
    headers,
  };
  const callback = {
    isNew: false,
    originalUser: null,
  }

  dispatch(projectAPICall(url, init, callback));
};

export const createOrEditProject = (project, option, authToken) => dispatch => {
  // go to the user, add a project, return the id, then load it into state

  const params = option === 'create' ? '' : '????' ;
  const method = option === 'create' ? 'POST' : 'PUT';

  const url = `${REACT_APP_BASE_URL}/api/projects/${project.id}/${params}`;
  const headers = { 
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };

  const init = { 
    method,
    body: JSON.stringify(project),
    headers
  };
  const callback = {
    loadTo: option,
  }

  dispatch(projectAPICall(url, init, callback));
};

