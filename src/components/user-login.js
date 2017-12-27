import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Link }  from 'react-router-dom';


import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';

// form to log in
// route /user/create
export function UserLogin (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsUser.loadUser())
  }

  return (
    <article>
      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
            <label
              className='inputLabel'
              htmlFor={'username'}>username
            </label>
            <Field
              name='username'
              id='username'
              placeholder='username'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'password'}>password
            </label>
            <Field
              name='password'
              id='password'
              placeholder='password'
              component='input'
              type='password'
              className='inputField'
              required />
          </div>

          <div>
            <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Log In
            </button>
            <button className='clearButton'
              type="button" disabled={props.pristine || props.submitting}
              onClick={props.reset}>Clear Form
            </button>
          </div>

        </form>

        <Link to='/user/create'>Create Account</Link>
      
    </article>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'userLogin'})
)(UserLogin);