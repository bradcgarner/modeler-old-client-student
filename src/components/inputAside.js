import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import InputAsideCanvasGeneral from './inputAsideCanvasGeneral';
import InputAsideCanvasAreas from './inputAsideCanvasAreas';
import InputAsideProducts from './inputAsideProducts';
import InputAsideStorms from './inputAsideStorms';
import InputAsideControlled from './inputAsideControlled';
import InputAsideET from './inputAsideET';

export function InputAside (props) {
    // asideMain will be 1 of the following, based on props.display.aside
    const asideMain = <div>
                      <InputAsideCanvasGeneral/>
                      <InputAsideCanvasAreas/>
                      <InputAsideProducts/>
                      <InputAsideStorms/>
                      <InputAsideControlled/>
                      <InputAsideET/>
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