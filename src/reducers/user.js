import * as actions from '../actions/user'

const initialState = {
  firstName: 'none',
  lastName: 'none',
  username: 'none',
  authToken: 'none',
  id: null,
}

export const reducer = (state = initialState, action) => {

  if (action.type === actions.LOAD_USER) {
    return Object.assign({}, state, action);
  }

  else {
    return state;
  }

}