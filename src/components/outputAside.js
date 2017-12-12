import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect, Switch}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import OutputAsideGraph from './outputAsideGraph';
import OutputAsideTable from './outputAsideTable';


export function OutputAside (props) {
  return (
    <aside>
      <h4>aside</h4>
      <Switch>
        <Route exact path = '/app/output/graphs' component = {OutputAsideGraph}/>
        <Route exact path = '/app/output/analysis' component = {OutputAsideTable}/>
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