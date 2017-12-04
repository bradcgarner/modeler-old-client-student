import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import LoginForm from './loginForm';
import LoginNew from './loginNew';

export function Login (props) {

  // loginForm will be 1 of following based on props.display.newAcct
  const loginForm = <div>
                    <LoginForm/>
                    <LoginNew/>
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

export default connect(mapStateToProps)(Login);