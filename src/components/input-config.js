import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to input. Will contain a canvas that allows a drawing as background.
// user can draw over canvas
// route app/input/configure
// 'aside' components have more specific controlling exact paths
export function InputConfig (props) {
  return (
    <section>
      <h4>Roof Plan</h4>
        <ul>
          <li>build this out as...</li>
          <li>entire panel is a canvas</li>
          <li>user can upload a single image to use as the canvas background</li>
          <li>user is in 'display' mode by default</li>
          <li>user can enter 'draw' mode to draw on the canvas</li>
          <li>user selects an area at left; that area is the area they draw</li>
          <li>drawing on the canvas is limited to 1 or more rectangles (e.g. to make an L shape, draw 2 rectangles)</li>
          <li>the shape is not saved by default; manually click to save and enter display mode; also cancel option</li>
          <li>when an area at left is drawn, the corresponding area on the canvas is highlighted in some way</li>
        </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputConfig);