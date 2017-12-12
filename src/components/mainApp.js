import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect, Switch}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import NavBar from './navbar'
import Input from './input'
import Output from './output'

export function MainApp (props) {
  return (
    <main>
      <Switch>
        <Route path = '/app/input'  component = {Input}/>
        <Route path = '/app/output' component = {Output}/>
        <Redirect from = '*' to = '/home'/>
      </Switch>
      <NavBar/>
    </main>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(MainApp);