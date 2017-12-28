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
      <h4>Input H2O Controlled</h4>
    </section>
  )  
}

const mapStateToProps = state => ({
  display: state.display,
  project: state.project
});

export default connect(mapStateToProps)(InputH2OStorms);