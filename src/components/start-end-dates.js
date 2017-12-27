import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

export function StartEndDates (props) {

  return (
    <div>

      <div>
        <label
          className='inputLabel'
          htmlFor={'startMonth'}>start month
        </label>
        <Field
          name='startMonth'
          id='startMonth'
          component='input'
          type='text'
          className='inputField'
          required />
      </div>

      <div>
        <label
          className='inputLabel'
          htmlFor={'startDay'}>start day
        </label>
        <Field
          name='startDay'
          id='startDay'
          component='input'
          type='text'
          className='inputField'
          required />
      </div>

      <div>
        <label
          className='inputLabel'
          htmlFor={'endMonth'}>end month
        </label>
        <Field
          name='endMonth'
          id='endMonth'
          component='input'
          type='text'
          className='inputField'
          required />
      </div>

      <div>
        <label
          className='inputLabel'
          htmlFor={'endDay'}>end day
        </label>
        <Field
          name='endDay'
          id='endDay'
          component='input'
          type='text'
          className='inputField'
          required />
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(StartEndDates);