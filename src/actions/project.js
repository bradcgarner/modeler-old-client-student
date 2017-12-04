import 'whatwg-fetch';
import {SubmissionError} from 'redux-form';
import { REACT_APP_BASE_URL } from '../config'

export const LOAD_PROJECT = 'LOAD_PROJECT';
export const loadProject = (project) => ({
  type: LOAD_PROJECT,
  name: project.name,
});