import 'whatwg-fetch';
import { SubmissionError } from 'redux-form';
import { REACT_APP_BASE_URL } from '../config'

export const INITIALIZE = 'INITIALIZE';
export const initialize = object => ({
  type: INITIALIZE,
  et: object.et,
  coverings: object.coverings,
});

// @@@@@@@@@@@@@@@@@@@@

export const stringArrayOfObjects=(array,key)=>{
  // input: [ {}, {} ]      output ['','']
  if (Array.isArray(array)) {
    return array.map(item=>item[key])
  }
  return [];
}

// initialize app
// fetch general data
// load to state
let coverings = {};
let et = {};

const listCoverings = [];
for(let key in coverings) {
  if(typeof key === 'number'){
    listCoverings.push({id: key.id, name: key.name})
  }
};

const listET = [];
for(let key in et) {
  if(typeof key === 'number'){
    listET.push({id: key.id, name: key.name})
  }
};