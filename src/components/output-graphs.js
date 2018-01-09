import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// output for graphs. Will contain an image container that will update based on controls in aside.
// route /app/output/graphs
export function OutputGraphs (props) {

  return (
    <section>
      <h1>Graph</h1>
        <ul>
          <li>build out as...</li>
          <li>when user clicks update at left, the graph on this screen updates</li>
          <li>to start with, generate each graph on demand on the server, then send the url of the static graph image to the client</li>
          <li>later allow multiple graphs to be generated and served up</li>
          <li>as a default, when the user clicks to run the model, a singular default graph displays, and the settings at left are updated</li>
          <li>settings at left are saved in the project profile, so if those are set at runtime, use them, if not, generate default settings</li>
        </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(OutputGraphs);