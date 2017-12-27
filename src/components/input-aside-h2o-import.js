import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import StartEndDates from './start-end-dates';

// interior to inputAside. Input of precipitation overall variables and settings.
// route app/input/h2o/storms
export function InputAsideH2oImport (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.importStorms())
  }
  
  return (
    <div>
      <h4>aside import</h4>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
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

          <div>
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
  reduxForm({form: 'inputAsideH2oImport'})
)(InputAsideH2oImport);