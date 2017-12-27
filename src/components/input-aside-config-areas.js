import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect'
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import InputAsideConfigAreaSelector from './input-aside-config-area-selector';

// interior to inputAside. Input of areas.
// route app/input/configure/areas
export function InputAsideConfigAreas (props) {

  // add a link to show ET table
  // add a link to show product details

  const selectArea = areaNum => {
    props.dispatch(actionsProject.selectArea())
  }  

  const newArea = '';
  
  const handleSubmitButton = values => {
    props.dispatch(actionsProject.placeholder())
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
  const areaNum = props.project.areas.focus;
  const area = props.project.areas[areaNum];

  const areaName     = `areaName${areaNum}`;
  const areaSize     = `area${areaNum}`;
  const areaProduct  = `product${areaNum}`;
  const areaRunoff   = `runoff${areaNum}`;
  const areaCDAs     = `cda${areaNum}`;
  const areaSlope    = `slope${areaNum}`;
  const areaET       = `etTable${areaNum}`;

  const listAreas = props.project.areas.list;
  const listProducts = props.general.products.list;
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
              htmlFor={areaName}>area name
            </label>
            <Field
              name={areaName}
              id={areaName}
              component='input'
              type='text'
              className='inputField'
              placeholder='area name'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={areaSize}>size ({props.project.general.areas})
            </label>
            <Field
              name={areaSize}
              id={areaSize}
              component='input'
              type='text'
              className='inputField'
              placeholder='size in units'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={areaProduct}>covering
            </label>
            <Field
              name={areaProduct}
              id={areaProduct}
              type='text'
              className='inputField'
              component={renderMultiselect}
              data={listProducts}
              textField='type'
              valueField='type'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={areaRunoff}>drains to
            </label>
            <Field
              name={areaRunoff}
              id={areaRunoff}
              type='text'
              className='inputField'
              component={renderDropdownList}
              valueField='type'
              textField='type'
              data={listAreas} />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={areaCDAs}>contributing drainage areas
            </label>
            <Field
              name={areaCDAs}
              id={areaCDAs}
              type='text'
              className='inputField'
              placeholder='area name'
              component={renderMultiselect}
              valueField='type'
              textField='type'
              data={listAreas} />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={areaSlope}>slope (percent)
            </label>
            <Field
              name={areaSlope}
              id={areaSlope}
              component='input'
              type='text'
              className='inputField'
              placeholder='2'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={areaET}>evapotranspiration table
            </label>
            <Field
              name={areaET}
              id={areaET}
              type='text'
              className='inputField'
              placeholder='area name'
              component={renderDropdownList}
              valueField='type'
              textField='type'
              data={listEtTables} />
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
  reduxForm({form: 'inputAsideConfigAreas'})
)(InputAsideConfigAreas);