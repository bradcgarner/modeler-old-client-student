import 'whatwg-fetch';
import { SubmissionError } from 'redux-form';
import { REACT_APP_BASE_URL } from '../config'

export const GO_TO = 'GO_TO';
export const goTo = (view) => ({
  type: GO_TO,
  view,
});