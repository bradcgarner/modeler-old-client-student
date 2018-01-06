import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch }  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// import InputAside from './input-aside';
import InputConfig from './input-config';
import InputCoverings from './input-coverings';
import InputH2OStorms from './input-h2o-storms';
import InputH2OImport from './input-h2o-import';
import InputH2OControlled from './input-h2o-controlled';
import InputET from './input-et';

import InputAsideConfigUnits from './input-aside-config-units';
import InputAsideConfigAreas from './input-aside-config-areas';
import InputAsideCoverings from './input-aside-coverings';
import InputAsideH2oIntervals from './input-aside-h2o-intervals';
import InputAsideH2oImport from './input-aside-h2o-import';
import InputAsideH2oControlled from './input-aside-h2o-controlled';
import InputAsideET from './input-aside-et';

// container div for input. Serves no purpose other than routing and positioning.
// routes /app/input...
// 'aside' components have more specific controlling exact paths
export function Input (props) {
  // inputMain will be 1 of the following, based on props.display.main
  return (
    <div className='innerContainer'>
      <aside>
        <h4>input aside</h4>
        <Switch>
          <Route exact path = '/app/input/configure/units'  component = {InputAsideConfigUnits}/>
          <Route exact path = '/app/input/configure/areas'    component = {InputAsideConfigAreas}/>
          <Route exact path = '/app/input/coverings'          component = {InputAsideCoverings}/>
          <Route exact path = '/app/input/h2o/intervals'      component = {InputAsideH2oIntervals}/>
          <Route exact path = '/app/input/h2o/import'         component = {InputAsideH2oImport}/>
          <Route exact path = '/app/input/h2o/controlled'     component = {InputAsideH2oControlled}/>
          <Route exact path = '/app/input/et'                 component = {InputAsideET}/>
          <Redirect from = '*' to = '/home'/>
        </Switch>
      </aside>
      <Switch>
        <Route path = '/app/input/configure'      component = {InputConfig}/>
        <Route path = '/app/input/coverings'      component = {InputCoverings}/>
        <Route path = '/app/input/h2o/storms'     component = {InputH2OStorms}/>
        <Route path = '/app/input/h2o/controlled' component = {InputH2OControlled}/>
        <Route path = '/app/input/h2o/import'     component = {InputH2OImport}/>
        <Route path = '/app/input/et'             component = {InputET}/>
      </Switch>    
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Input);