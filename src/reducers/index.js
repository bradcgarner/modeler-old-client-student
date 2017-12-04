import { combineReducers } from 'redux';
import { reducer as user} from './user';
import { reducer as project} from './project';
import { reducer as display} from './display';
import { reducer as form } from 'redux-form';

export default combineReducers({
  user,
  project,
  display,
  form
});