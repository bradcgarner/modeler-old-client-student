import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import * as actionsGeneral from '../actions/general';

// interior to inputAside. No user input. Displays sources of product efficiency table data.
// route app/input/products
export function InputAsideProducts (props) {

  const selectProduct = value => {
    let selectedValue = value[0];
    for (let key in value) {
      if (key !== '0' && typeof value[key] === 'string') {
        selectedValue += value[key];
      }
    }
    props.dispatch(actionsGeneral.selectProduct(selectedValue))
  }

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

  const productsList = props.general.products.list;
  
  return (
    <div>
      <form className='asideInputForm'>
        <div>
          <label
            className='inputLabel'
            htmlFor='name'>product
          </label>
          <Field
            name='name'
            id='name'
            type='text'
            className='inputField'
            component={renderDropdownList}
            data={productsList}
            onChange={(value) => selectProduct(value)} />
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  project: state.project,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideProducts'})
)(InputAsideProducts);