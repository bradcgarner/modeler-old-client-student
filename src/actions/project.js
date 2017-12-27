import 'whatwg-fetch';
import {SubmissionError} from 'redux-form';
import { REACT_APP_BASE_URL } from '../config'

export const LOAD_PROJECT = 'LOAD_PROJECT';
export const loadProject = project => ({
  type: LOAD_PROJECT,
  name: project.name,
  general: project.general,
  areas: project.areas,
  products: project.products,
  events: project.events,
  storms: project.storms,
});

export const LOAD_GENERAL_SETTINGS = 'LOAD_GENERAL_SETTINGS';
export const loadGeneralSettings = settings => ({
  type: LOAD_GENERAL_SETTINGS,
  area: settings.area, 
  volume: settings.volume,
  thickness: settings.thickness,
});

export const LOAD_AREA = 'LOAD_AREA';
export const loadArea = area => ({
  type: LOAD_AREA,
  id: area.id,
  name: area.name,
  area: area.area,
  product: area.product,
  runoff: area.runoff,
  cda: area.cda,
  slope: area.slope,
  etTable: area.etTable,
});

export const LOAD_STORM_SETTINGS = 'LOAD_STORM_SETTINGS';
export const loadStormSettings = settings => ({
  type: LOAD_STORM_SETTINGS,
  intervalMins: settings.intervalMins,
  eventGapThreshold: settings.eventGapThreshold,
});

export const LOAD_SAVED_STORMS = 'LOAD_SAVED_STORMS';
export const loadSavedStorms = storms => ({
  type: LOAD_SAVED_STORMS,
  storms,
});

export const LOAD_IMPORTED_STORMS = 'LOAD_IMPORTED_STORMS';
export const loadImportedStorms = storms => ({
  type: LOAD_IMPORTED_STORMS,
  stormData: storms.stormData,
  source: storms.source,
  location: storms.location,
  startMonth: storms.startMonth,
  startDay: storms.startDay,
  endMonth: storms.endMonth,
  endDay: storms.endDay,
});

export const LOAD_CONTROLLED_SETTINGS = 'LOAD_CONTROLLED_SETTINGS';
export const loadControlledSettings = settings => ({
  type: LOAD_CONTROLLED_SETTINGS,
  controlledRate: settings.controlledRate,
  controlledHi: settings.controlledHi,
  controlledLo: settings.controlledLo,
});

export const LOAD_ANALYSIS_SETTINGS = 'LOAD_ANALYSIS_SETTINGS';
export const loadAnalysisSettings = settings => ({
  type: LOAD_ANALYSIS_SETTINGS,
  xxx: settings.xxx,
});

export const LOAD_RANGE_SETTINGS = 'LOAD_RANGE_SETTINGS';
export const loadRangeSettings = settings => ({
  type: LOAD_RANGE_SETTINGS,
  startMonth: settings.startMonth,
  startDay: settings.startDay,
  endMonth: settings.endMonth,
  endDay: settings.endDay,
  startEvent: settings.startEvent,
  endEvent: settings.endEvent,
});

export const SELECT_AREA = 'SELECT_AREA';
export const selectArea = areaName => ({
  type: SELECT_AREA,
  areaName,
});

export const ADD_AREA = 'ADD_AREA';
export const addArea = () => ({
  type: ADD_AREA,
});

export const UPDATE_AREA_MINUTES = 'UPDATE_AREA_MINUTES';
export const updateAreaMinutes = area => ({
  type: UPDATE_AREA_MINUTES,
  id: area.id,
  value: area.value,
});

export const placeholderr = (project) => ({
  type: 'PLACEHOLDER',
  name: 'xxxxx',
});

// @@@@@@@@@@@@@ ASYNC @@@@@@@@@@@@@@

export const fetchProject = projectId => dispatch => {
  const project = {
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
        product: 0,   // product id foreign key
        runoff: 0,   // area id foreign key
        cda: [0,0,0], // area ids foreign keys
        slope: 0,      // integer %
        etTable: 0,         // table id foreign key
      }, 
      1: {             // area id primary key
        id: 1,         // area id primary key
        name: 'b',      // text name
        area: 0,       // integer
        product: 0,   // product id foreign key
        runoff: 0,   // area id foreign key
        cda: [1], // area ids foreign keys
        slope: 0,      // integer %
        etTable: 0,         // table id foreign key
      }, 
      2: {             // area id primary key
        id: 1,         // area id primary key
        name: 'c',      // text name
        area: 0,       // integer
        product: 0,   // product id foreign key
        runoff: 0,   // area id foreign key
        cda: [1], // area ids foreign keys
        slope: 0,      // integer %
        etTable: 0,         // table id foreign key
      }, 
    },
    products: {},    // copy of products used in areas for hash-type reference
    events: [1,2,3], // list of all events, generated at runtime, used for selection list
    storms: {
      totalMinutes: 0, // single-purpose value to summarize all values below,
      minuteTracker: { // single-purpose object to add up all minutes on the form; used at input, ignored at submission
        0: 0,
        1: 0,
      }
    }
  };
  dispatch(loadProject(project));
};

export const addProject = userId => dispatch => {
  // go to the user, add a project, return the id, then load it into state
  const project = {
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
        product: 0,   // product id foreign key
        runoff: 0,   // area id foreign key
        cda: [0,0,0], // area ids foreign keys
        slope: 0,      // integer %
        etTable: 0,         // table id foreign key
      }, 
      1: {             // area id primary key
        id: 1,         // area id primary key
        name: 'b',      // text name
        area: 0,       // integer
        product: 0,   // product id foreign key
        runoff: 0,   // area id foreign key
        cda: [1], // area ids foreign keys
        slope: 0,      // integer %
        etTable: 0,         // table id foreign key
      }, 
      2: {             // area id primary key
        id: 1,         // area id primary key
        name: 'c',      // text name
        area: 0,       // integer
        product: 0,   // product id foreign key
        runoff: 0,   // area id foreign key
        cda: [1], // area ids foreign keys
        slope: 0,      // integer %
        etTable: 0,         // table id foreign key
      }, 
    },
    products: {},    // copy of products used in areas for hash-type reference
    events: [1,2,3], // list of all events, generated at runtime, used for selection list
    storms: {
      totalMinutes: 0, // single-purpose value to summarize all values below,
      minuteTracker: { // single-purpose object to add up all minutes on the form; used at input, ignored at submission
        0: 0,
        1: 0,
      }
    }
  };
  dispatch(loadProject(project));
};

export const updateGeneralSettings = values => dispatch => {
  console.log('values in gerneral settings', values)
  dispatch(loadGeneralSettings(values));
};

export const updateArea = values => dispatch => {
  console.log('values in area', values)
  dispatch(loadArea(values));
};

export const updateStormSettings = values => dispatch => {
  console.log('values in storm', values)
  dispatch(loadStormSettings(values));
};

export const updateSavedStorms = values => dispatch => {
  console.log('values in update storms', values)
  dispatch(loadSavedStorms(values));
};

export const importStorms = values => dispatch => {
  console.log('values in import storm', values)
  /* input: source: storms.source,
  location: storms.location,
  startMonth: storms.startMonth,
  startDay: storms.startDay,
  endMonth: storms.endMonth,
  endDay: storms.endDay, */
  /* output: same + fetched key of stormData */
  dispatch(loadImportedStorms(values));
};

export const updateControlledSettings = values => dispatch => {
  console.log('values in controlled', values)
  dispatch(loadControlledSettings(values));
};

