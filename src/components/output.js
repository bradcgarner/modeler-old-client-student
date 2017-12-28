import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch }  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import OutputGraphs from './output-graphs';
import OutputAnalysis from './output-analysis';

import OutputAsideRanges from './output-aside-ranges';
import OutputAsideAnalysis from './output-aside-analysis';

// container div for output. Serves no purpose other than routing and positioning.
// routes /app/output...
// 'aside' components have more specific controlling exact paths
export function Output (props) {
  return (
    <div className='innerContainer'>
      <aside>
        <h4>output aside</h4>
         <OutputAsideRanges/>
         <Route path = '/app/output/analysis' component = {OutputAsideAnalysis}/>
      </aside>
      <Switch>
        <Route path = '/app/output/graphs' component = {OutputGraphs}/>
        <Route path = '/app/output/analysis' component = {OutputAnalysis}/>
        <Redirect from = '*' to = '/home'/>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Output);