import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect, Switch}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// nav bar to main app, after login
// routes /app...
export function NavBar (props) {
  return (
    <nav>
      <h1>GRSWM</h1>
      <ul>
        <li>Configure</li>
        <li>Projects</li>
        <li>Storms</li>
        <li>Et</li>
        <li>Hydrographs</li>
        <li>Analysis</li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(NavBar);