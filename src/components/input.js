import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import InputAside from './inputAside';
import InputConfigure from './inputConfigure';
import InputProducts from './inputProducts';
import InputH2O from './inputH2O';
import InputET from './inputET';

export function Input (props) {
  // inputMain will be 1 of the following, based on props.display.main
  const inputMain = <div>
      <Route path = '/app/input/configure' component = {InputConfigure}/>
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