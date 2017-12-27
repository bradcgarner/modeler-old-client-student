import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect'
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of areas.
// route app/input/configure/areas
export function InputAsideConfigAreaSelector (props) {

  const selectArea = value => {
    let selectedValue = value[0];
    for (let key in value) {
      if (key !== '0' && typeof value[key] === 'string') {
        selectedValue += value[key];
      }
    }
    props.dispatch(actionsProject.selectArea(selectedValue));
  }

  const addArea = () => {
    props.dispatch(actionsProject.addArea())
  }


  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />


  const listAreas = props.project.areas.list;

  return (
    <div>
      <form className='asideInputForm'>
        <div>
          <label
            className='inputLabel'
            htmlFor='name'>area
          </label>
          <Field
            name='name'
            id='name'
            type='text'
            className='inputField'
            placeholder='area name'
            component={renderDropdownList}
            data={listAreas}
            onChange={(value) => selectArea(value)} />
        </div>
      </form>
      <button onClick={()=>addArea()}>add area</button>
    </div>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  display: state.display,
  user: state.user,
  project: state.project,
  initialValues: {name: state.project.areas[state.project.areas.focus].name},
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigAreaSelector'})
)(InputAsideConfigAreaSelector);