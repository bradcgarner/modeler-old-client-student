import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to input. Will contain a canvas that allows a drawing as background.
// user can draw over canvas
// route app/input/configure
// 'aside' components have more specific controlling exact paths
export function InputConfig (props) {
  return (
    <aside>
      <h4>Input Configure</h4>
    </aside>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputConfig);