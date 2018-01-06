import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect'
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import InputAsideConfigAreaSelector from './input-aside-config-area-selector';

// interior to inputAside. Input of areas.
// route app/input/configure/areas
export function InputAsideConfigAreas (props) {

  // add a link to show ET table
  // add a link to show covering details
  
  const handleSubmitButton = values => {
    // edit this to send all project areas
    props.dispatch(actionsProject.createOrEditProject(values, 'areas', props.user.authToken))
  }

  const renderMultiselect = ({ input, data, valueField, textField }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField} />

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

  // make this reliable
  // const areaNum = props.project.areas.focus;
  // const area = props.project.areas[areaNum];

  const listOtherAreas = props.project.areas.list.filter(area=>area!==props.project.areas[props.project.areas.focus].name);
  const listCoverings = props.general.coverings.list;
  const listEtTables = props.general.etTables.list;

  return (
    
    <div>
      <h4>aside configure areas</h4>

      <InputAsideConfigAreaSelector/>

      <form className='asideInputForm' 
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
      >

          <div>
            <label
              className='inputLabel'
              htmlFor='name'>area name
            </label>
            <Field
              name='name'
              id='name'
              component='input'
              type='text'
              className='inputField'
              placeholder='area name'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='area'>size ({props.project.units.area})
            </label>
            <Field
              name='area'
              id='area'
              component='input'
              type='text'
              className='inputField'
              placeholder='size in units'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='covering'>covering
            </label>
            <Field
              name='covering'
              id='covering'
              type='text'
              className='inputField'
              component={renderMultiselect}
              data={listCoverings}
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='runoff'>drains to
            </label>
            <Field
              name='runoff'
              id='runoff'
              type='text'
              className='inputField'
              component={renderDropdownList}
              data={listOtherAreas} />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='cda'>contributing drainage areas
            </label>
            <Field
              name='cda'
              id='cda'
              type='text'
              className='inputField'
              placeholder='area name'
              component={renderMultiselect}
              valueField='type'
              textField='type'
              data={listOtherAreas} />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='slope'>slope (percent)
            </label>
            <Field
              name='slope'
              id='slope'
              component='input'
              type='text'
              className='inputField'
              placeholder='2'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor='etTable'>evapotranspiration table
            </label>
            <Field
              name='etTable'
              id='etTable'
              type='text'
              className='inputField'
              placeholder='area name'
              component={renderDropdownList}
              data={listEtTables} />
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
  user: state.user,
  project: state.project,
  initialValues: state.project.areas[state.display.focusArea],
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigAreas'})
)(InputAsideConfigAreas);