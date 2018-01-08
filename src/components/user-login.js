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
    props.dispatch(actionsUser.login(values))
    console.log('CHANGE THIS TO A .THEN')
    props.history.push('/user/dashboard');
  }

  return (
    <article className='userLogin'>
      <div className='formWrapper'>
        <form className='userForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >

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
              className='inputField'
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
              className='inputField'
              required />
          </div>

          <div className='buttonContainer'>
            <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Log In
            </button>
          </div>

        </form>

        <button className='createAccount submitButton'><Link to='/user/create'>Create Account</Link></button>
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
  reduxForm({form: 'userLogin'})
)(UserLogin);