import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import SelectList from 'react-widgets/lib/SelectList'
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of general variables and settings.
// route app/input/configure/general
export function InputAsideConfigUnits (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.createOrEditProject({...values, id: props.project.id}, 'units', props.user.authToken))
  }

  const renderSelectList = ({ input, data }) =>
    <SelectList {...input}
      onBlur={() => input.onBlur()}
      data={data} />

  return (
    <div className='asideContainer'>

      <form className='asideInputForm'
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
          <div className='formFieldWrapper'>

            <div className='labelFieldPair'>
              <label
                className='inputLabel'
                htmlFor={'area'}>area unit of measurement
              </label>
              <Field
                name='area'
                id='area'
                component={renderSelectList}
                data={props.general.area}
                className='inputField'
                required />
            </div>

            <div className='labelFieldPair'>
              <label
                className='inputLabel'
                htmlFor={'volume'}>volume unit of measurement
              </label>
              <Field
                name='volume'
                id='volume'
                component={renderSelectList}
                data={props.general.volume}
                className='inputField'
                required />
            </div>

            <div className='labelFieldPair'>
              <label
                className='inputLabel'
                htmlFor={'thickness'}>thickness unit of measurement
              </label>
              <Field
                name='thickness'
                id='thickness'
                component={renderSelectList}
                data={props.general.thickness}
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
  general: state.general,
  user: state.user,
  display: state.display,
  project: state.project,
  initialValues: state.project.units,
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigUnits'})
)(InputAsideConfigUnits);