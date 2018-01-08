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
export function InputAsideCoverings (props) {

  const focusCovering = value => {
    const selectedName = helpers.convertStringKeysToString(value);
    const focusId = helpers.queryObject(selectedName, props.project.coverings, 'name', 'id')
    props.dispatch(actionsDisplay.focusCovering(focusId))
  }

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

  const coveringsList = props.general.coverings.list;
  
  return (
    <div className='asideContainer'>
      <form className='asideInputForm'>
        <div className='formFieldWrapper'>
          <div className='labelFieldPair'>
            <label
              className='inputLabel'
              htmlFor='name'>covering
            </label>
            <Field
              name='name'
              id='name'
              type='text'
              className='inputField'
              component={renderDropdownList}
              data={coveringsList}
              onChange={(value) => focusCovering(value)} />
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  general: state.general,
  project: state.project,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideCoverings'})
)(InputAsideCoverings);