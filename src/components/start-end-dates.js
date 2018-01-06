import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'

export class StartEndDates extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monthList: props.general.months,
      startDaysMax: 31,
      endDaysMax: 31,
      startDaysList: [],
      endDaysList: [],
      startMonth: '',
      startDay: '',
      endMonth: '',
      endDay: '',
    }
  }

  setDays(theMonth) {
    let monthDays;
    switch (theMonth) {
      case 'Feb':
        monthDays = 28;
      break;
      case 'Apr':
      case 'Jun':
      case 'Sep':
      case 'Nov':
        monthDays = 30;
        break;
      default:
        monthDays = 31;
    }
    const daysList = [];
    for (let i = 1; i<= monthDays; i++) {
      daysList.push(i.toString());
    }
    return daysList;
  }

  checkDates(startEnd, dayMonth, value){
    let selectedValue = value[0];
    for (let key in value) {
      if (key !== '0' && typeof value[key] === 'string') {
        selectedValue += value[key];
      }
    }
    if (dayMonth === 'day') {
      this.setState({[`${startEnd}Day`]: selectedValue});
    } else {
      const dayList = this.setDays(selectedValue);
      this.setState({
        [`${startEnd}Month`]: selectedValue,
        [`${startEnd}DayMax`]: dayList.length,
        [`${startEnd}DaysList`]: dayList,
      });
    }
  }

  render() {

    const renderDropdownList = ({ input, data, valueField, textField }) =>
      <DropdownList {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />

    const monthList = this.state.monthList;
    const startDaysList = this.state.startDaysList;
    const endDaysList = this.state.endDaysList;

    return (
      <div>
  
        <div>
          <label
            className='inputLabel'
            htmlFor={'startMonth'}>start month
          </label>
          <Field
            name='startMonth'
            id='startMonth'
            component={renderDropdownList}
            data={monthList}
            className='inputField'
            onChange={(value)=>this.checkDates('start', 'month', value)}
            required />
        </div>
  
        <div>
          <label
            className='inputLabel'
            htmlFor={'startDay'}>start day
          </label>
          <Field
            name='startDay'
            id='startDay'
            component={renderDropdownList}
            data={startDaysList}
            className='inputField'
            onChange={(value)=>this.checkDates('start', 'day', value)}
            required />
        </div>
  
        <div>
          <label
            className='inputLabel'
            htmlFor={'endMonth'}>end month
          </label>
          <Field
            name='endMonth'
            id='endMonth'
            component={renderDropdownList}
            data={monthList}
            className='inputField'
            onChange={(value)=>this.checkDates('end', 'month', value)}
            required />
        </div>
  
        <div>
          <label
            className='inputLabel'
            htmlFor={'endDay'}>end day
          </label>
          <Field
            name='endDay'
            id='endDay'
            component={renderDropdownList}
            data={endDaysList}
            className='inputField'
            onChange={(value)=>this.checkDates('end', 'day', value)}
            required />
        </div>
  
      </div>
    )
  }
  }
  

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(StartEndDates);