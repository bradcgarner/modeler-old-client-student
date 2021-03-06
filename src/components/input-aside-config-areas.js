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
    props.dispatch(actionsProject.createOrEditProject({...values, id: props.project.id}, 'areas', props.user.authToken))
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

  const listOtherAreas = Array.isArray(props.project.areas.list) ? 
    props.project.areas.list.filter(area=>{
      if (props.display.focusArea !== area.id && typeof parseInt(area.id) == 'number') {
        return area.name
      }
    }) : [];
  const listCoverings = Array.isArray(props.general.coverings.list) ? props.general.coverings.list : [];
  const listEtTables = Array.isArray(props.general.etTables.list) ? props.general.etTables.list : [];

  return (
    <div className='asideContainer'>
      <InputAsideConfigAreaSelector/>
      <form className='asideInputForm' 
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
          <div className='formFieldWrapper'>

            <div className='labelFieldPair'>
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

            <div className='labelFieldPair'>
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

            <div className='labelFieldPair'>
              <label
                className='inputLabel'
                htmlFor='covering'>covering
              </label>
              <Field
                name='covering'
                id='covering'
                type='text'
                className='inputField'
                component={renderDropdownList}
                data={listCoverings}
                required />
            </div>

            <div className='labelFieldPair'>
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

            <div className='labelFieldPair'>
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

            <div className='labelFieldPair'>
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

            <div className='labelFieldPair'>
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