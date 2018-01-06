import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import StartEndDates from './start-end-dates';

// inside outputAside.  Input for managing graph data (e.g. run graphc for certain dates)
// route /output/graphs
export function OutputAsideRanges (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.loadAnalysisSettings(values))
  }

  // set this so that we toggle between date ranges and event ranges, not both

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />
  
  return (
    <div>
      <h4>Output Aside ranges</h4>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <StartEndDates/>
          
          <div>
          <label 
            className='inputLabel' 
            htmlFor={'startEvent'}>from event
          </label>
          <Field
            name='startEvent'
            id='startEvent'
            component={renderDropdownList}
            data={props.project.events}
            className='inputField'/>              
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'endEvent'}>to event
            </label>
            <Field
              name='endEvent'
              id='endEvent'
              component={renderDropdownList}
              data={props.project.events}
              className='inputField' />
          </div>

          <div>
            <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Save
            </button>
            <button className='clearButton'
              type="button" disabled={props.pristine || props.submitting}
              onClick={props.reset}>Clear Form
            </button>
          </div>

        </form>

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'outputAsideRanges'})
)(OutputAsideRanges);