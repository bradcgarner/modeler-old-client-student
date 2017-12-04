import * as actions from '../actions/project'

const initialState = {
  name: 'none',
}

export const reducer = (state = initialState, action) => {

  if (action.type === actions.LOAD_PROJECT) {
    return Object.assign({}, state, action);
  }

  else {
    return state;
  }

}