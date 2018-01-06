import { combineReducers } from 'redux';
import { general } from './general';
import { display} from './display';
import { user} from './user';
import { project} from './project';
import { reducer as form } from 'redux-form';

export default combineReducers({
  general,
  display,
  user,
  project,
  form,
});