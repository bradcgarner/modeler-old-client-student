import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// inside outputAside.  Input for managing tabular data (e.g. run report for certain dates)
// route /output/analysis
export function OutputAsideAnalysis (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.placeholder())
  }
  
  return (
    <div>
      <h4>Output Aside Analysis</h4>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
            <label
              className='inputLabel'
              htmlFor={'title'}>some analysis option...
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

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'outputAsideAnalysis'})
)(OutputAsideAnalysis);