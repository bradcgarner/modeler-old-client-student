import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// form to create new user
// route /user/create
export function UserCreate (props) {
  // create account 
  return (
    <article>
      <p>Create Account</p>
      <p>first name</p>
      <p>last name</p>
      <p>organization</p>
      <p>email</p>
      <p>username</p>
      <p>password</p>
      <p>confirm password</p>
      <p>create account</p>
    </article>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(UserCreate);