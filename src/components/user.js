import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import UserLogin from './user-login';
import UserCreate from './user-create';
import UserDashboard from './user-dashboard';

// container for user login or user create. Serves no purpose other than routing and positioning.
// routes /user
export function User (props) {
  // create account 
  return (
    <main>
      <Switch>
        <Route exact path = '/user/login' component = {UserLogin}/>
        <Route exact path = '/user/create' component = {UserCreate}/>
        <Route exact path = '/user/dashboard' component = {UserDashboard}/>
        <Redirect from = '*' to = '/user/login'/>
      </Switch>
    </main>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(User);