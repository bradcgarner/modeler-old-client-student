import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import * as helpers from '../actions/helpers';
// interior to inputAside. Input of areas.
// route app/input/configure/areas
export function InputAsideConfigAreaSelector (props) {

  const focusArea = value => {
    const selectedName = helpers.convertStringKeysToString(value);
    const focusId = helpers.queryObject(selectedName, props.project.areas, 'name', 'id')
    props.dispatch(actionsDisplay.focusArea(focusId));
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
            component={renderDropdownList}
            data={listAreas}
            onChange={(value) => focusArea(value)} />
        </div>
      </form>
      <button onClick={()=>addArea()}>add area</button>
    </div>
  )
}

const mapStateToProps = state => ({
  // general: state.general,
  project: state.project,
  initialValues: {name: state.project.areas[state.project.areas.focus].name},
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigAreaSelector'})
)(InputAsideConfigAreaSelector);