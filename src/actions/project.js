import 'whatwg-fetch';
import { REACT_APP_BASE_URL } from '../config'
import {SubmissionError} from 'redux-form';


export const LOAD_PROJECT = 'LOAD_PROJECT';
export const loadProject = (project) => ({
  type: LOAD_PROJECT,
  name: project.name,
});