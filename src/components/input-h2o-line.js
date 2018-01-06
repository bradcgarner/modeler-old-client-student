import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of precipitation overall variables and settings.
// route app/input/h2o/storms
export class InputH2oLine extends React.Component {
  constructor(){
    super();
    this.state = {
      minutes: 0,
      hours: 0,
      days: 0,
      totalMinutes: 0,
    }
  }

  updateTotal(key, value){
    // console.log('');
    // console.log(value)
    const intValue = typeof value.nativeEvent.target.value === 'string' ? parseInt((value.nativeEvent.target.value),10) : 0 ;
    // console.log(intValue);
    // console.log(this.state.minutes, this.state.hours, this.state.days, this.state.totalMinutes)
    const newMinutes = key === 'minutes' ? intValue : this.state.minutes ;
    const newHours = key === 'hours' ? intValue : this.state.hours ;
    const newDays = key === 'days' ? intValue : this.state.days ;
    
    const totalMinutes = newMinutes + ( newHours * 60 ) + ( newDays * 60 * 24 );

    this.setState({
      [key]: intValue,
      totalMinutes: totalMinutes,
    });

    this.props.dispatch(actionsDisplay.updateStormMinutes({id: this.props.index, value: totalMinutes}))
  }

  render() {

    const precipRate = `precipRate${this.props.index}`
    const minutes    = `minutes${this.props.index}`
    const hours      = `hours${this.props.index}`
    const days       = `days${this.props.index}`

    return (

      <tr key={this.props.index}>

        <th context='row'>{this.props.index}</th>
        
        <td><Field
          name={precipRate}
          id={precipRate}
          component='input'
          type='text'
          className='inputField' />
        </td>
        <td><Field
          name={minutes}
          id={minutes}
          component='input'
          type='text'
          className='inputField'
          // ref={input => this.input = input}
          onChange={(value)=>this.updateTotal('minutes',value)} />
        </td>
        <td><Field
          name={hours}
          id={hours}
          component='input'
          type='text'
          className='inputField'
          onChange={(value)=>this.updateTotal('hours',value)} />
          </td>
        <td><Field
          name={days}
          id={days}
          component='input'
          type='text'
          className='inputField'
          onChange={(value)=>this.updateTotal('days',value)} />
          </td>

        <td>{this.state.totalMinutes}</td>
  
      </tr>
    )
  }
  
}

export default connect()(InputH2oLine)