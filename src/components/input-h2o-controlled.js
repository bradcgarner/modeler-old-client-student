import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to input. Will contain a form to allow user to input individual storms or storm segments.
// route app/input/h2o
// 'aside' components have more specific controlling exact paths
export function InputH2OStorms(props) {

  return (
    <section>
      <h4>Controlled Input</h4>
        <ul>
          <li>build out as...</li>
          <li>if no controlled input, show just an image of rain, for rain only</li>
          <li>if controlled input, show an infographic of the input source
            <ul>
              <li>include areas that drain to the input source</li>
              <li>include some descriptive text about the settings for when it dispenses</li>
            </ul>
          </li>
          <li>overall this should be like a presentation graphic of the controlled input</li>
        </ul>
    </section>
  )  
}

const mapStateToProps = state => ({
  display: state.display,
  project: state.project
});

export default connect(mapStateToProps)(InputH2OStorms);