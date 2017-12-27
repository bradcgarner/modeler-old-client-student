import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of general variables and settings.
// route app/input/configure/general
export function InputAsideConfigGeneral (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.updateGeneralSettings(values))
  }

  const renderDropdownList = ({ input, data, valueField, textField }) =>
    <DropdownList {...input}
      data={data}
      valueField={valueField}
      textField={textField}
      onChange={input.onChange} />

  const renderSelectList = ({ input, data }) =>
    <SelectList {...input}
      onBlur={() => input.onBlur()}
      data={data} />

  return (
    <div>
      <h4>aside configure general</h4>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
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

          <div>
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

          <div>
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
  general: state.general,
  display: state.display,
  project: state.project,
  initialValues: {
    area: state.project.general.area, 
    volume: state.project.general.volume, 
    thickness: state.project.general.thickness, 
  },
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigGeneral'})
)(InputAsideConfigGeneral);