import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// form to create new user
// route /user/create
export function UserDashboard () {
  // create account 
  return (
    <article>
      <p>My Projects</p>
      <p>list each</p>
    </article>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(UserDashboard);