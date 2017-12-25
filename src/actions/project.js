import 'whatwg-fetch';
import {SubmissionError} from 'redux-form';
import { REACT_APP_BASE_URL } from '../config'

export const LOAD_PROJECT = 'LOAD_PROJECT';
export const loadProject = (project) => ({
  type: LOAD_PROJECT,
  name: project.name,
  areas: project.areas,
});

export const SELECT_AREA = 'SELECT_AREA';
export const selectArea = focusNum => ({
  type: SELECT_AREA,
  focusNum,
});

export const ADD_AREA = 'ADD_AREA';
export const addArea = area => ({
  type: ADD_AREA,
  area,
});

export const placeholder = (project) => ({
  type: 'PLACEHOLDER',
  name: 'xxxxx',
});