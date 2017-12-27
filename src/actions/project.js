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
export const selectArea = areaName => ({
  type: SELECT_AREA,
  areaName,
});

export const ADD_AREA = 'ADD_AREA';
export const addArea = () => ({
  type: ADD_AREA,
});

export const UPDATE_AREA_MINUTES = 'UPDATE_AREA_MINUTES';
export const updateAreaMinutes = area => ({
  type: UPDATE_AREA_MINUTES,
  id: area.id,
  value: area.value,
});

export const placeholder = (project) => ({
  type: 'PLACEHOLDER',
  name: 'xxxxx',
});