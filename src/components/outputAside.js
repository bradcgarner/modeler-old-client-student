import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect, Switch}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import OutputAsideGraphs from './outputAsideGraphs';
import OutputAsideAnalysis from './outputAsideAnalysis';

// container div for output aside. Serves no purpose other than routing and styling.
// use 'aside' components for specific controlling exact paths
export function OutputAside (props) {
  return (
    <aside>
      <h4>aside</h4>
      <Switch>
        <Route exact path = '/app/output/graphs' component = {OutputAsideGraphs}/>
        <Route exact path = '/app/output/analysis' component = {OutputAsideAnalysis}/>
        <Redirect from = '*' to = '/home'/>
      </Switch>
    </aside>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(OutputAside);