import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import About from './landing-about';

// landing page footer prior to login
// route /home
export function LandingFooter (props) {
  // gray bar, fixed to bottom of page
  // get started takes to login page; there is no guest account
  return (
    <footer>
      <h1>landing footer</h1>
      <About/>
      <h3>Get Started</h3>
    </footer>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(LandingFooter);