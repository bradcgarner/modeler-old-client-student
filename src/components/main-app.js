import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch}  from 'react-router-dom';
import Input from './input'
import Output from './output'
import './main-app.css';

// container for application after login
// routes /app... (controlled path via various grandchildren components)
export function MainApp (props) {
  return (
    <main className='mainApp'>
      <Switch>
        <Route path = '/app/input'  component = {Input}/>
        <Route path = '/app/output' component = {Output}/>
        <Redirect from = '*' to = '/home'/>
      </Switch>
    </main>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(MainApp);