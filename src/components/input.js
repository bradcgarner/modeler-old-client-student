import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import InputAside from './inputAside';
import InputCanvas from './inputCanvas';
import InputProducts from './inputProducts';
import InputStorms from './inputStorms';
import InputET from './inputET';

export function Input (props) {
  // inputMain will be 1 of the following, based on props.display.main
  const inputMain = <div>
                    <InputCanvas/>
                    <InputProducts/>
                    <InputStorms/>
                    <InputET/>
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