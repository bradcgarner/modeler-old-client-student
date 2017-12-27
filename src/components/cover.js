import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// app name and logo. 
// routes /home, /user/login, /user/create
export function Cover (props) {
  return (
    <div>
      <h1>GRSWM</h1>
      <h4>Green Roof Stormwater Modeler</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Cover);