import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// tabular data output
// routes /output... 
export function OutputAnalysis (props) {
  return (
    <section>
      <h1>Analysis</h1>
      <ul>
        <li>build out same as graphs</li>
        <li>this is tabular data; exact format TBD</li>
        <li>create options to customize tabular data</li>
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(OutputAnalysis);