import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of controlled water input.
// route app/input/h2o/controlled
export function InputAsideH2oControlled (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.updateControlledSettings(values))
  }

  return (
    <div>
      <h4>aside controlled</h4>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
            <label
              className='inputLabel'
              htmlFor='controlledRate'>rate of controlled flow
            </label>
            <Field
              name='controlledRate'
              id='controlledRate'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>
          <div>discharge when vwc is between __ % and __ %</div>
          <div>
            <label
              className='inputLabel'
              htmlFor='controlledHi'>high
            </label>
            <Field
              name='controlledHi'
              id='controlledHi'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='controlledLo'>low
            </label>
            <Field
              name='controlledLo'
              id='controlledLo'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Save
            </button>
            <button className='clearButton'
              type="button" disabled={props.pristine || props.submitting}
              onClick={props.reset}>Reset
            </button>
          </div>

        </form>

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project,
  initialValues: {
    controlledRate: state.general.controlledRate,
    controlledHi: state.general.controlledHi,
    controlledLo: state.general.controlledLo,  },
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideH2oControlled'})
)(InputAsideH2oControlled);