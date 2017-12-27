import * as actions from '../actions/general'
import { general as initialState } from './initial-state';

export const reducer = (state = initialState, action) => {

  if (action.type === actions.INITIALIZE) {
    return {...state, 
      et: action.et,
      coverings: action.coverings,
    };
  }

  if (action.type === actions.SELECT_ET) {
    // input: name of ET table, calc: find id of ET table, output: put id in focus
    let id = 0;
    for (let key in state.etTables) {
      if (state.etTables[key].name === action.etTableName) {
        id = state.etTables[key].id;
      }
    }
    const etTables = {...state.etTables, focus: id}
    return {...state, etTables };
  }

  if (action.type === actions.SELECT_PRODUCT) {
    // input: name of ET table, calc: find id of ET table, output: put id in focus
    let id = 0;
    for (let key in state.products) {
      if (state.products[key].name === action.productName) {
        id = state.products[key].id;
      }
    }
    const products = {...state.products, focus: id}
    return {...state, products };
  }

  else {
    return state;
  }

}