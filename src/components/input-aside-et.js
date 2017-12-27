import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. Only input is selection of evapotransporation table (input by others).
// route app/input/et
export function InputAsideET (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.placeholder())
  }
  
  return (
    <div>
      <h4>aside ET</h4>

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputAsideET);