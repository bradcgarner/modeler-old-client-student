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
    props.dispatch(actionsUser.createOrEditUser(values, true))
  }

  // create account 
  return (
    <article className='userCreate'>
      <div className='formWrapper'>
        <form className='userForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >

          <div className='labelFieldPairHoriz'>
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
              className='inputField userInputField'
              required />
          </div>

          <div className='labelFieldPairHoriz'>
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
              className='inputField userInputField'
              required />
          </div>

          <div className='labelFieldPairHoriz'>
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
              className='inputField userInputField'
              required />
          </div>
          
          <div className='labelFieldPairHoriz'>
            <label
              className='inputLabel'
              htmlFor={'email'}>email
            </label>
            <Field
              name='email'
              id='email'
              placeholder='email'
              component='input'
              type='text'
              className='inputField userInputField'
              required />
          </div>
          
          <div className='labelFieldPairHoriz'>
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
              className='inputField userInputField'
              required />
          </div>

          <div className='labelFieldPairHoriz'>
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
              className='inputField userInputField'
              required />
          </div>

          <div className='labelFieldPairHoriz'>
            <label
              className='inputLabel'
              htmlFor={'password2'}>re-type...
            </label>
            <Field
              name='password2'
              id='password2'
              placeholder='re-type password'
              component='input'
              type='password'
              className='inputField userInputField'
              required />
          </div>

          <div className='buttonContainer'>
            <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Save
            </button>
            <button className='clearButton'
              type="button" disabled={props.pristine || props.submitting}
              onClick={props.reset}>Clear Form
            </button>
          </div>

        </form>

        <button className='createAccount submitButton'><Link to='/user/login'>I Already Have An Account</Link></button>
      </div>
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