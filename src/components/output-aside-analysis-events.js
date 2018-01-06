import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// inside outputAside.  Input for managing graph data (e.g. run graphc for certain dates)
// route /output/graphs
export function OutputAsideAnalysisEvents (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.createOrEditProject({...values, id: props.project.id}, 'analysisSettings', props.user.authToken))
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
      <h4>Output Aside events</h4>

      <form className='outputAsideAnalysisEvents'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
          
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
          </div>

        </form>

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  general: state.general,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'outputAsideAnalysisEvents'})
)(OutputAsideAnalysisEvents);