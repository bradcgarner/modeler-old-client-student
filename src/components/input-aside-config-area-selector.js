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

  const handleSubmitButton = values => {
    console.log('submitting', values)
    props.dispatch(actionsProject.placeholder())
  }

  const addArea = () => {
    props.dispatch(actionsProject.placeholder())
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

      <form className='asideInputForm'
          onChange={props.handleSubmit((values) => handleSubmitButton(values))}
        >
          <div>
            <label
              className='inputLabel'
              htmlFor='areaName'>area
            </label>
            <Field
              name='areaName'
              id='areaName'
              type='text'
              className='inputField'
              placeholder='area name'
              component={renderDropdownList}
              data={listAreas}
              textField='type'
              valueField='type' />
          </div>

        </form>

        <button className='submitButton' onClick={()=>addArea()}>Add Area</button>

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
  reduxForm({form: 'inputAsideConfigAreaSelector'})
)(InputAsideConfigAreaSelector);