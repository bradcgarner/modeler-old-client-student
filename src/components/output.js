import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import OutputAside from './outputAside';
import OutputGraphs from './outputGraphs';
import OutputAnalysis from './outputAnalysis';


export function Output (props) {
  return (
    <div>
      <h1>Output</h1>
      <OutputAside/>
      <Route path = '/output/graphs' component = {OutputGraphs}/>
      <Route path = '/output/analysis' component = {OutputAnalysis}/>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Output);