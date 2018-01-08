import 'whatwg-fetch';
import { REACT_APP_BASE_URL } from '../config';
import * as actionsDisplay from './display';
import * as helpers from './helpers';

export const LOAD_INITIALIZE = 'LOAD_INITIALIZE';
export const loadInitialize = general => ({
  type: LOAD_INITIALIZE,
  etTables: general.etTables,
  coverings: general.coverings,
});

// @@@@@@@@@@@@@@@ ASYNC @@@@@@@@@@@@@@@@@

export const generalAPICall = (url, init, callback) => dispatch => {
  // console.log(url, init, callback);
  // // dispatch(loadInitialize({}))
  // return;
  dispatch(actionsDisplay.changeView('loading'));

  // console.log('just before',init)
  return fetch(url, init)   
  .then(general=>{ 
    if (!general.ok) { 
      return Promise.reject(general.statusText);
    }
    return general.json();
  })
  .then(general=>{
    console.log('general returned', general)
    if (callback.loadTo === 'initialize') {
      const etTablesObj = helpers.arrayToObject(general.etTables, 'id');
      const etTablesList = general.etTables.map(table=>table.name)
      const etIdList = general.etTables.map(table=>table.id)
      const etTables = {...etTablesObj, list: etTablesList, listId: etIdList};

      const coveringsObj = helpers.arrayToObject(general.coverings, 'id');
      const coveringsList = general.coverings.map(covering=>covering.name)
      const coveringsIdList = general.coverings.map(covering=>covering.id)
      const coverings = {...coveringsObj, list: coveringsList, listId: coveringsIdList};

      const formattedGeneral = {etTables, coverings};
      dispatch(loadInitialize(formattedGeneral))
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

export const initialize = () => dispatch => {   // state location options = 'user' and 'userViewed'

  const url = `${REACT_APP_BASE_URL}/api/initialize`;
  const headers = {
    'content-type': 'application/json',
  }; 
  const init = { 
    method: 'GET',
    headers,
  };
  const callback = {
    loadTo: 'initialize',
  }
  return dispatch(generalAPICall(url, init, callback));
}

