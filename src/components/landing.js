import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import LandingFooter from './landing-footer';
import Cover from './cover';

// landing page prior to login
// route /home
export function Landing (props) {
  // image of USCG, set to 'cover'
  return (
    <article>
      <LandingFooter/>
    </article>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Landing);