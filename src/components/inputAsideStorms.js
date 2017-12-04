import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

export function InputAsideStorms (props) {
  return (
    <div>
      <h4>aside storms</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputAsideStorms);