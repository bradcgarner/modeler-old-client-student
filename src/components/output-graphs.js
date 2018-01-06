import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// output for graphs. Will contain an image container that will update based on controls in aside.
// route /app/output/graphs
export function OutputGraphs (props) {

  return (
    <section>
      <h1>Output Graph</h1>
    </section>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(OutputGraphs);