import 'whatwg-fetch';
import { REACT_APP_BASE_URL } from '../config'
import {SubmissionError} from 'redux-form';


export const GO_TO = 'GO_TO';
export const goTo = (view) => ({
  type: GO_TO,
  view,
});