import React from 'react';
import { Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of precipitation overall variables and settings.
// route app/input/h2o/storms
export default class InputH2oLine extends React.Component {
  constructor(){
    super();
    this.state = {
      minutes: 0,
      hours: 0,
      days: 0,
      totalMinutes: 0,
    }
  }

  updateTotal(key,value){
    console.log(key, value)
    this.setState({
      [key]: this.state[key] + value
    });
    const totalMinutes = this.state.minutes + 
      ( this.state.hours * 60 ) +
      ( this.state.days * 60 * 24 );
    this.setState({
      totalMinutes: totalMinutes,
    })
  }

  // https://redux-form.com/6.6.0/examples/selectingformvalues/

  render() {

    const precipRate = `precipRate${this.props.index}`
    const minutes    = `minutes${this.props.index}`
    const hours      = `hours${this.props.index}`
    const days       = `days${this.props.index}`

    return (

      <li key={this.props.index}>
        <Field
          name={precipRate}
          id={precipRate}
          component='input'
          type='text'
          className='inputField' />
  
        <Field
          name={minutes}
          id={minutes}
          component='input'
          type='text'
          className='inputField'
          ref={input => this.input = input}
          onChange={()=>this.updateTotal('minutes',this)} />
  
        <Field
          name={hours}
          id={hours}
          component='input'
          type='text'
          className='inputField'/>
  
        <Field
          name={days}
          id={days}
          component='input'
          type='text'
          className='inputField' />
  
        {this.totalMinutes}
  
      </li>
    )
  }
  
}