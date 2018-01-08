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

  const download = () => {
    console.log('get events from state on click')
    props.dispatch(actionsProject.download());
  }

  // set this so that we toggle between date ranges and event ranges, not both

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />
  
  return (
    <div className='outputRangeSelector'>
      <form className='outputAsideAnalysisForm'
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
        <div className='formFieldWrapper'>

          <StartEndDates/>
          
          <div className='buttonContainer buttonColumnBottom'>
            <div className='buttonContainer buttonRowBottom'>
              
              <button className='iconWrap' aria-label='update'
                type="submit" disabled={props.pristine || props.submitting}>
                <i className="fa fa-arrow-circle-right tooltip" aria-hidden="true">
                  <div className='popover'>Update Analysis</div>
                </i>            
              </button>

              <button className='iconWrap' aria-label='download'
                onClick={()=>download()}>
                <i className="fa fa-download tooltip" aria-hidden="true">
                  <div className='popover'>Download</div>
                </i>            
              </button>

            </div>
          </div>

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