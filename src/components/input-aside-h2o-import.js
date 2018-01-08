import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import StartEndDates from './start-end-dates';

// interior to inputAside. Input of precipitation overall variables and settings.
// route app/input/h2o/storms
export function InputAsideH2oImport (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsDisplay.importStorms())
  }
  
  return (
    <div className='asideContainer'>

      <form className='asideInputForm'
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
        <div className='formFieldWrapper'>

          <div className='labelFieldPair'>
            <label
              className='inputLabel'
              htmlFor={'source'}>source
            </label>
            <Field
              name='source'
              id='source'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div className='labelFieldPair'>
            <label
              className='inputLabel'
              htmlFor={'location'}>location
            </label>
            <Field
              name='location'
              id='location'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <StartEndDates/>
        </div>

          <div className='buttonContainer buttonColumnBottom'>
            <div className='buttonContainer buttonRowBottom'>

              <button className='iconWrap' aria-label='save'
                type="submit" disabled={props.pristine || props.submitting}>
                <i className="fa fa-floppy-o tooltip" aria-hidden="true">
                  <div className='popover'>Save</div>
                </i>            
              </button>
              <button className='iconWrap' aria-label='clear form'
                type="button" disabled={props.pristine || props.submitting}
                onClick={props.reset}>
                <i className="fa fa-undo tooltip" aria-hidden="true">
                  <div className='popover'>Clear form</div>
                </i>
              </button>
            </div>
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
  reduxForm({form: 'inputAsideH2oImport'})
)(InputAsideH2oImport);