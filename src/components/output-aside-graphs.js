import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// inside outputAside.  Input for managing graph data (e.g. run graphc for certain dates)
// route /output/graphs
export function OutputAsideGraphs (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.placeholder())
  }
  
  return (
    <aside>
      <h4>Output Aside graphs</h4>

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
)(OutputAsideGraphs);