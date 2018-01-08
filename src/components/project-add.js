import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import * as helpers from '../actions/helpers';

// interior to inputAside. No user input. Displays sources of covering efficiency table data.
// route app/input/coverings
export function ProjectAdd (props) {

  const addProject = (values) => {
    props.dispatch(actionsProject.createOrEditProject({...values, userId: props.user.id}, 'create', props.user.authToken));
    console.log('convert to a .then when async works');
    props.history.push('/app/input/configure/units');
  }

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

  const stateList = props.general.states;
  const countryList = props.general.countries;
  
  return (
    <div className='projectAddWrapper'>
      <form className='projectAddForm' onSubmit={props.handleSubmit(values=>addProject(values))}>
        <div className='labelFieldPair'>
          <label
            className='inputLabel'
            htmlFor='name'>Project Name
          </label>
          <Field
            name='name'
            id='name'
            type='text'
            component='input'
            placeholder='Project Name'
            className='inputField' />
        </div>
        <div className='labelFieldPair'>
          <label
            className='inputLabel'
            htmlFor='locationCity'>City
          </label>
          <Field
            name='locationCity'
            id='locationCity'
            type='text'
            component='input'
            placeholder='Project City'
            className='inputField' />
        </div>
        <div className='labelFieldPair'>
          <label
            className='inputLabel'
            htmlFor='locationState'>State
          </label>
          <Field
            name='locationState'
            id='locationState'
            type='text'
            className='inputField'
            component={renderDropdownList}
            data={stateList} />
        </div>
        <div className='labelFieldPair'>
          <label
            className='inputLabel'
            htmlFor='locationCountry'>Country
          </label>
          <Field
            name='locationCountry'
            id='locationCountry'
            type='text'
            className='inputField'
            component={renderDropdownList}
            data={countryList} />
          </div>
          <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Create Project
          </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  user: state.user,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'projectAdd'})
)(ProjectAdd);