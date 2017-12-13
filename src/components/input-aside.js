import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link, Redirect, Switch}  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import InputAsideConfigGeneral from './input-aside-config-general';
import InputAsideConfigAreas from './input-aside-config-areas';
import InputAsideProducts from './input-aside-products';
import InputAsideStorms from './input-aside-storms';
import InputAsideControlled from './input-aside-controlled';
import InputAsideET from './input-aside-et';

// container div for input aside. Serves no purpose other than routing and styling.
// use 'aside' components for specific controlling exact paths
export function InputAside (props) {
  const asideMain = <div>
    <Switch>
      <Route exact path = '/app/input/configure/general'  component = {InputAsideConfigGeneral}/>
      <Route exact path = '/app/input/configure/areas'    component = {InputAsideConfigAreas}/>
      <Route exact path = '/app/input/products'           component = {InputAsideProducts}/>
      <Route exact path = '/app/input/h2o/storms'         component = {InputAsideStorms}/>
      <Route exact path = '/app/input/h2o/controlled'     component = {InputAsideControlled}/>
      <Route exact path = '/app/input/et'                 component = {InputAsideET}/>
      <Redirect from = '*' to = '/home'/>
    </Switch>
  </div>
  return (
    <aside>
      <h4>aside</h4>
     {asideMain}
    </aside>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputAside);