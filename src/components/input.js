import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import InputAside from './input-aside';
import InputConfig from './input-config';
import InputProducts from './input-products';
import InputH2O from './input-h2o';
import InputET from './input-et';

// container div for input. Serves no purpose other than routing and positioning.
// routes /app/input...
// 'aside' components have more specific controlling exact paths
export function Input (props) {
  // inputMain will be 1 of the following, based on props.display.main
  const inputMain = <div>
      <Route path = '/app/input/config' component = {InputConfig}/>
      <Route path = '/app/input/products'  component = {InputProducts}/>
      <Route path = '/app/input/h2o'       component = {InputH2O}/>
      <Route path = '/app/input/et'        component = {InputET}/>
    </div>
  return (
    <div>
      <h1>Input</h1>
      <InputAside/>
      {inputMain}
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Input);