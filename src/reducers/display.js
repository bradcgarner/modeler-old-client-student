import * as actions from '../actions/display'

const initialState = {
  view: 'landing',
}

export const reducer = (state = initialState, action) => {

  if (action.type === actions.GO_TO) {
    return Object.assign({}, state, action);
  }

  else {
    return state;
  }

}