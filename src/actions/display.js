import 'whatwg-fetch';
import { REACT_APP_BASE_URL } from '../config'
import * as helpers from './helpers';

export const CHANGE_VIEW = 'CHANGE_VIEW';
export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view,
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modal, message) => ({
  type: TOGGLE_MODAL,
  modal,
  message
});

export const FOCUS_AREA = 'FOCUS_AREA';
export const focusArea = id => ({
  type: FOCUS_AREA,
  focusArea: id,
});

export const FOCUS_ET = 'FOCUS_ET';
export const focusEt = id => ({
  type: FOCUS_ET,
  focusEt: id,
});

export const FOCUS_COVERING = 'FOCUS_COVERING';
export const focusCovering = id => ({
  type: FOCUS_COVERING,
  focusCovering: id,
});

export const UPDATE_STORM_MINUTES = 'UPDATE_STORM_MINUTES';
export const updateStormMinutes = area => ({
  type: UPDATE_STORM_MINUTES,
  id: area.id,
  value: area.value,
});

export const LOAD_STORMS_IMPORTED = 'LOAD_STORMS_IMPORTED';
export const loadStormsImported = storms => ({
  type: LOAD_STORMS_IMPORTED,
  stormData: storms.stormData,
  source: storms.source,
  location: storms.location,
  startMonth: storms.startMonth,
  startDay: storms.startDay,
  endMonth: storms.endMonth,
  endDay: storms.endDay,
});


// @@@@@@@@@@@@@@@ ASYNC @@@@@@@@@@@@@@@@@

export const displayAPICall = (url, init, callback) => dispatch => {
  console.log(url, init, callback);
  return;
  // console.log('just before',init)
  dispatch(changeView('loading'));
  
  return fetch(url, init)   
  .then(display=>{ 
    if (!display.ok) { 
      return Promise.reject(display.statusText);
    }
    return display.json();
  })
  .then(display=>{
    console.log('display returned', display)
    if (callback.loadTo === 'stormsImported') {
      dispatch(loadStormsImported(display));
    }
    return dispatch(changeView('normal'));
  })
  .catch(error => {
    // console.log('error',error);
    dispatch(changeView('normal'));
    return dispatch(toggleModal(true, error));
  })
}

// @@@@@@@@@@@@@@@ ASYNC HEADER/URL FORMATTING @@@@@@@@@@@@@@@@@

export const importStorms = (values, authToken) => dispatch => {
  console.log('values in import storm', values)
  let id = ''
  let {source, location, startMonth, startDay, endMonth, endDay} = values;
  if (source && location && startMonth && endMonth) {
    startDay = startDay ? startDay : helpers.getDaysOfMonth(startMonth);
    endDay = endDay ? endDay : helpers.getDaysOfMonth(endMonth);
  } else if (typeof values === 'number') {
    id = values;
  } else {
    return dispatch(toggleModal(true, 'invalid selection'));
  }
    
  const url = `${REACT_APP_BASE_URL}/api/storms/${id}`;
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${authToken}`, 
  }; 
  const init = { 
    method: 'GET',
    headers,
  };
  const callback = {
    loadTo: 'stormsImported',
  }
  return dispatch(displayAPICall(url, init, callback));
}