import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import * as actionsDisplay from '../actions/display';
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
    this.props.dispatch(actionsProject.createOrEditProject({...values, id: this.props.project.id}, 'stormTableToRun', this.props.user.authToken))
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
        <h4>Precipitation Settings</h4>
        <form className='inputForm'
            onSubmit={this.props.handleSubmit((values) => this.handleSubmitButton(values))} >
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
                <td>{this.props.display.storms.totalMinutes}</td>
                <td>{this.props.display.storms.totalHours}</td>
                <td>{this.props.display.storms.totalDays}</td>
                <td>{this.props.display.storms.allMinutes}</td>
              </tr>
            </tbody>
          </table>

          <div className='buttonContainer buttonColumnBottom'>
            <div className='buttonContainer buttonRowBottom'>

            <div onClick={()=>this.addLine()} className='iconWrapper' aria-label='add'>
              <i className="fa fa-plus tooltip" aria-hidden="true">
                <div className='popover'>Add</div>
              </i>
            </div>

            <button className='iconWrap' aria-label='save'
              type="submit" disabled={this.props.pristine || this.props.submitting}>
              <i className="fa fa-floppy-o tooltip" aria-hidden="true">
                <div className='popover'>Save</div>
              </i>            
            </button>
            <button className='iconWrap' aria-label='reset to prior save'
              type="button" disabled={this.props.pristine || this.props.submitting}
              onClick={this.props.reset}>
              <i className="fa fa-undo tooltip" aria-hidden="true">
                <div className='popover'>Reset to prior save</div>
              </i>
            </button>
          </div>

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