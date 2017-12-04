import 'whatwg-fetch';
import { SubmissionError } from 'redux-form';
import { REACT_APP_BASE_URL } from '../config'


export const LOAD_USER = 'LOAD_USER';
export const loadUser = (user) => ({
  type: LOAD_USER,
  firstName: user.firstName,
  lastName: user.lastName,
  username: user.username,
  id: user.id,
});