import * as actions from '../actions/user'
import { user as initialState } from './initial-state';

export const user = (state = initialState, action) => {

  if (action.type === actions.LOAD_USER) {
    const user = {...action};
    delete user.type;
    console.log('user',user)
    return {...user};
  }

  else {
    return state;
  }

}