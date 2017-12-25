import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to input. Will contain a form to allow user to input individual storms or storm segments.
// route app/input/h2o
// 'aside' components have more specific controlling exact paths
export function InputH2O (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.placeholder())
  }

  return (
    <aside>
      <h4>Input H2O</h4>
      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
            <label
              className='inputLabel'
              htmlFor={'title'}>xxxxxxx
            </label>
            <Field
              name='xxxxx'
              id='xxxx'
              component='input'
              type='text'
              className='inputField'
              required />
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

    </aside>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'xxxxxx'})
)(InputH2O);