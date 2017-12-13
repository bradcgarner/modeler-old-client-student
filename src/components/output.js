import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import OutputAside from './output-aside';
import OutputGraphs from './output-graphs';
import OutputAnalysis from './output-analysis';

// container div for output. Serves no purpose other than routing and positioning.
// routes /app/output...
// 'aside' components have more specific controlling exact paths
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