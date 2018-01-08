import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of controlled water input.
// route app/input/h2o/controlled
export function InputAsideH2oControlled (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.createOrEditProject({...values, id: props.project.id}, 'controlled', props.user.authToken))
  }

  return (
    <div className='asideContainer'>

      <form className='asideInputForm'
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
        <div className='formFieldWrapper'>

          <div className='labelFieldPair'>
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
          <div className='labelFieldPair'>
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

          <div className='labelFieldPair'>
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
        </div>

          <div className='buttonContainer buttonColumnBottom'>
            <div className='buttonContainer buttonRowBottom'>

              <button className='iconWrap' aria-label='save'
                type="submit" disabled={props.pristine || props.submitting}>
                <i className="fa fa-floppy-o tooltip" aria-hidden="true">
                  <div className='popover'>Save</div>
                </i>            
              </button>
              <button className='iconWrap' aria-label='reset to prior save'
                type="button" disabled={props.pristine || props.submitting}
                onClick={props.reset}>
                <i className="fa fa-undo tooltip" aria-hidden="true">
                  <div className='popover'>Reset to prior save</div>
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
  project: state.project,
  initialValues: state.controlled,
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideH2oControlled'})
)(InputAsideH2oControlled);