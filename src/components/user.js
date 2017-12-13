import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Switch, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import UserLogin from './user-login';
import UserCreate from './user-create';

// container for user login or user create. Serves no purpose other than routing and positioning.
// routes /user
export function User (props) {
  const loginForm = <div>
    <Switch>
      <Route exact path = '/user/login' component = {UserLogin}/>
      <Route exact path = '/user/create' component = {UserCreate}/>
      <Redirect from = '*' to = '/user/login'/>
    </Switch>
    </div>
  // create account 
  return (
    <article>
      {loginForm}
    </article>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(User);