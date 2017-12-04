import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './components/cover'
import Landing from './components/landing'
import Login from './components/login'
import NavBar from './components/navbar'
import Input from './components/input'
import Output from './components/output'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <Login/>
        <Cover/>
        <NavBar/>
        <Input/>
        <Output/>
      </div>
    );
  }
}

export default App;
