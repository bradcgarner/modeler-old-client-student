import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch }  from 'react-router-dom';
import OutputGraphs from './output-graphs';
import OutputAnalysis from './output-analysis';
import OutputAside from './output-aside';

// container div for output. Serves no purpose other than routing and positioning.
// routes /app/output...
// 'aside' components have more specific controlling exact paths
export function Output (props) {
  return (
    <div className='innerContainer'>
      <OutputAside/>
      <Switch>
        <Route path = '/app/output/graphs' component = {OutputGraphs}/>
        <Route path = '/app/output/analysis' component = {OutputAnalysis}/>
        <Redirect from = '*' to = '/home'/>
      </Switch>
    </div>
  )
}


export default connect()(Output);