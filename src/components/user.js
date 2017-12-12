import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Switch, Redirect}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import UserLogin from './userLogin';
import UserCreate from './userCreate';

export function User (props) {

  // loginForm will be 1 of following based on props.display.newAcct
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