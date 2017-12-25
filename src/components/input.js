import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch }  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// import InputAside from './input-aside';
import InputConfig from './input-config';
import InputProducts from './input-products';
import InputH2O from './input-h2o';
import InputET from './input-et';

import InputAsideConfigGeneral from './input-aside-config-general';
import InputAsideConfigAreas from './input-aside-config-areas';
import InputAsideProducts from './input-aside-products';
import InputAsideStorms from './input-aside-storms';
import InputAsideControlled from './input-aside-controlled';
import InputAsideET from './input-aside-et';

// container div for input. Serves no purpose other than routing and positioning.
// routes /app/input...
// 'aside' components have more specific controlling exact paths
export function Input (props) {
  // inputMain will be 1 of the following, based on props.display.main
  return (
    <div>
      <h1>Input</h1>
      <aside>
        <h4>aside</h4>
        <Switch>
          <Route exact path = '/app/input/configure/general'  component = {InputAsideConfigGeneral}/>
          <Route exact path = '/app/input/configure/areas'    component = {InputAsideConfigAreas}/>
          <Route exact path = '/app/input/products'           component = {InputAsideProducts}/>
          <Route exact path = '/app/input/h2o/storms'         component = {InputAsideStorms}/>
          <Route exact path = '/app/input/h2o/controlled'     component = {InputAsideControlled}/>
          <Route exact path = '/app/input/et'                 component = {InputAsideET}/>
          <Redirect from = '*' to = '/home'/>
        </Switch>
      </aside>
      <Switch>
        <Route path = '/app/input/configure' component = {InputConfig}/>
        <Route path = '/app/input/products'  component = {InputProducts}/>
        <Route path = '/app/input/h2o'       component = {InputH2O}/>
        <Route path = '/app/input/et'        component = {InputET}/>
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