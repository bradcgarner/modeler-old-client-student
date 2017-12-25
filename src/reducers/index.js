import { combineReducers } from 'redux';
import { reducer as general } from './general';
import { reducer as display} from './display';
import { reducer as user} from './user';
import { reducer as project} from './project';
import { reducer as form } from 'redux-form';

export default combineReducers({
  general,
  display,
  user,
  project,
  form,
});