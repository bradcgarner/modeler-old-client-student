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
    this.props.dispatch(actionsProject.updateSavedStorms(values))
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
        <form className='inputForm'
            onSubmit={this.props.handleSubmit((values) => this.handleSubmitButton(values))}
          >
          <table>
            <tbody>
              <tr>
                <th>line</th>
                <th>precip rate</th>
                <th>minutes</th>
                <th>hours</th>
                <th>days</th>
                <th>total minutes</th>
              </tr>
              {this.state.lines}
              <tr>
                <th context='row'>totals</th>
                <td>n/a</td>
                <td>{this.props.project.storms.totalMinutes}</td>
                <td>{this.props.project.storms.totalHours}</td>
                <td>{this.props.project.storms.totalDays}</td>
                <td>{this.props.project.storms.allMinutes}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={()=>this.addLine()}>add line</button>

            <div>
              <button className='submitButton'
                type="submit" disabled={this.props.pristine || this.props.submitting}>Save
              </button>
              <button className='clearButton'
                type="button" disabled={this.props.pristine || this.props.submitting}
                onClick={this.props.reset}>Reset
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