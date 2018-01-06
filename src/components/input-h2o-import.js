import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to inputAside. Only input is selection of evapotransporation table (input by others).
// route app/input/et
export function InputH2OImport (props) {

  
  return (
    <section>
      <h4>input h2o import (show a map)</h4>

    </section>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  project: state.project
});

export default connect(mapStateToProps)(InputH2OImport);