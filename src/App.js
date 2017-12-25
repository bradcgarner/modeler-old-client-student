import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/landing'
import User from './components/user'
import MainApp from './components/main-app'
import Cover from './components/cover'
import NavBar from './components/navbar';

// edit routes below so that non-logged-in users are redirected to home or login

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path = '/home' component = {Landing}/>
            <Route path =       '/user' component = {User}/>
            <Route path =       '/app'  component = {MainApp}/>
            <Redirect from = '*' to = '/home'/>
          </Switch>
          <Route path ='/home' component = {Cover}/>
          <Route path ='/user' component = {Cover}/>
          <Route path ='/home' component = {NavBar}/>
          <Route path ='/user' component = {NavBar}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
