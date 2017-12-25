import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Link }  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';

// form to create new user
// route /user/create
export function UserCreate (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsUser.loadUser())
  }

  // create account 
  return (
    <article>
      <p>Create Account</p>
      <p>first name</p>
      <p>last name</p>
      <p>organization</p>
      <p>email</p>
      <p>username</p>
      <p>password</p>
      <p>confirm password</p>
      <p>create account</p>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
            <label
              className='inputLabel'
              htmlFor={'firstName'}>first name
            </label>
            <Field
              name='firstName'
              id='firstName'
              placeholder='first name'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'lastName'}>last name
            </label>
            <Field
              name='lastName'
              id='lastName'
              placeholder='last name'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'organization'}>organization
            </label>
            <Field
              name='organization'
              id='organization'
              placeholder='organization'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>
          
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
            <label
              className='inputLabel'
              htmlFor={'password2'}>re-type password
            </label>
            <Field
              name='password2'
              id='password2'
              placeholder='re-type password'
              component='input'
              type='password'
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

        <Link to='/user/create'>I Already Have An Account</Link>

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
  reduxForm({form: 'userCreate'})
)(UserCreate);