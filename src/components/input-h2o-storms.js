import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import InputH2OLine from './input-h2o-line';

// interior to input. Will contain a form to allow user to input individual storms or storm segments.
// route app/input/h2o
// 'aside' components have more specific controlling exact paths
export class InputH2OStorms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lines: [<InputH2OLine index={0} key={0}/>]
    }
  }

  handleSubmitButton = values => {
    this.props.dispatch(actionsProject.placeholder())
  }

  addLine() {
    const i = this.state.lines.length;
    console.log(i)
    this.setState({
      lines: [...this.state.lines, <InputH2OLine index={i} key={i}/>]
    });
  }

  render() {
    return (
      <section>
        <h4>Input H2O</h4>
        <form className='asideInputForm'
            onSubmit={this.props.handleSubmit((values) => this.handleSubmitButton(values))}
          >
  
          <div>precip rate minutes hours days total minutes</div>
          {this.state.lines}
          <button onClick={()=>this.addLine()}>add line</button>
          <div>total minutes total hours total days total minutes</div>

            <div>
              <button className='submitButton'
                type="submit" disabled={this.props.pristine || this.props.submitting}>Save
              </button>
              <button className='clearButton'
                type="button" disabled={this.props.pristine || this.props.submitting}
                onClick={this.props.reset}>Clear Form
              </button>
            </div>
  
          </form>
  
      </section>
    )
  }
  
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputH2OStorms'})
)(InputH2OStorms);