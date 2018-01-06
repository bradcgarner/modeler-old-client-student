import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import * as helpers from '../actions/helpers';
import StartEndDates from './start-end-dates';

// inside outputAside.  Input for managing graph data (e.g. run graphc for certain dates)
// route /output/graphs
export function OutputAsideAnalysisDates (props) {

  const handleSubmitButton = values => {
    const startDay = values.startDay ? values.startDay : helpers.getDaysOfMonth(values.startMonth);
    const endDay = values.endDay ? values.endDay : helpers.getDaysOfMonth(values.endMonth);
    const correctedValues = {...values, startDay, endDay, id: props.project.id};
    props.dispatch(actionsProject.createOrEditProject(correctedValues, 'analysisSettings', props.user.authToken))
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
      <h4>Output Aside dates</h4>

      <form className='outputAsideAnalysisDates'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >

          <StartEndDates/>
          
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
  reduxForm({form: 'outputAsideAnalysisDates'})
)(OutputAsideAnalysisDates);