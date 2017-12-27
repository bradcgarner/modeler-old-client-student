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
    props.dispatch(actionsProject.placeholder())
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
              htmlFor={'areaUnit'}>area unit of measurement
            </label>
            <Field
              name='areaUnit'
              id='areaUnit'
              component={renderSelectList}
              data={props.general.area}
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'volumeUnit'}>volume unit of measurement
            </label>
            <Field
              name='volumeUnit'
              id='volumeUnit'
              component={renderSelectList}
              data={props.general.volume}
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'thicknessUnit'}>thickness unit of measurement
            </label>
            <Field
              name='thicknessUnit'
              id='thicknessUnit'
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
              onClick={props.reset}>Clear Form
            </button>
          </div>

        </form>

    </div>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigGeneral'})
)(InputAsideConfigGeneral);