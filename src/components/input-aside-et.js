import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import * as actionsGeneral from '../actions/general';

// interior to inputAside. Only input is selection of evapotransporation table (input by others).
// route app/input/et
export function InputAsideET (props) {

  const selectEt = value => {
    let selectedValue = value[0];
    for (let key in value) {
      if (key !== '0' && typeof value[key] === 'string') {
        selectedValue += value[key];
      }
    }
    props.dispatch(actionsGeneral.selectEt(selectedValue))
  }

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />


  const listEtTables = props.general.etTables.list;
  
  return (
    <div>
      <form className='asideInputForm'>
        <div>
          <label
            className='inputLabel'
            htmlFor='name'>ET table
          </label>
          <Field
            name='name'
            id='name'
            type='text'
            className='inputField'
            component={renderDropdownList}
            data={listEtTables}
            onChange={(value) => selectEt(value)} />
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  project: state.project,
  general: state.general,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideET'})
)(InputAsideET);