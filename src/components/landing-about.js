import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// modal for about to slide up over landing
// route /home
export function About (props) {
  // Click on About slides up from footer; changing display slides back down
  // About can include text and a GIF
  return (
    <div>
      <h3>About</h3>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(About);