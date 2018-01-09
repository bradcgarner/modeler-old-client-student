import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionsDisplay from '../actions/display';
import * as actionsGeneral from '../actions/general';
import * as actionsProject from '../actions/project';
import './navbar.css';

// nav bar to main app, after login
// routes /app...
export class NavBar extends React.Component {
  componentDidMount() {
    if (!(this.props.general.initialized)) {
      this.props.dispatch(actionsGeneral.initialize());
    }
  }

  run() {
    console.log('check for completion first!');
    this.props.dispatch(actionsProject.createOrEditProject(this.props.project,'run',this.props.user.authToken))
    .then(()=>{
      return this.props.history.push('/app/output/analysis');
    })
  }

  render() {

    console.log('this.props.match.url',this.props.match.url)

    return (
      <nav>
        <ul>
          <Link to='/home'><li className='navItem'>
          <div className='iconWrapper' aria-label='sign out'>
            <i className="fa fa-sign-out tooltip" aria-hidden="true">
              <div className='popover'>Sign Out</div>
            </i>
          </div>
          </li></Link>
          <Link to='/user/dashboard'><li className='navItem'>
            <div className='iconWrapper' aria-label='my account'>
              <i className="fa fa-user tooltip" aria-hidden="true">
                <div className='popover'>My account</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/configure/units'><li className='navItem'>
            <div className='iconWrapper' aria-label='units of measurement'>
              <i className="fa fa-arrows-h tooltip" aria-hidden="true">
                <div className='popover popoverWide1'>Units of Measurement</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/configure/areas'><li className='navItem'>
            <div className='iconWrapper' aria-label='project areas'>
              <i className="fa fa-object-ungroup tooltip" aria-hidden="true">
                <div className='popover'>Project Areas</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/h2o/intervals'><li className='navItem'>
            <div className='iconWrapper' aria-label='storms'>
              <i className="fa fa-tint tooltip" aria-hidden="true">
                <div className='popover'>Storms</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/h2o/import'><li className='navItem'>
            <div className='iconWrapper' aria-label='import historical storms'>
              <i className="fa fa-upload tooltip" aria-hidden="true">
                <div className='popover'>Import Historical Storms</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/h2o/controlled'><li className='navItem'>
            <div className='iconWrapper' aria-label='controlled input'>
              <i className="fa fa-shower tooltip" aria-hidden="true">
                <div className='popover popoverWide1'>Controlled Input</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/et'><li className='navItem'>
            <div className='iconWrapper' aria-label='evapotranspiration'>
              <i className="fa fa-cloud-upload tooltip" aria-hidden="true">
                <div className='popover popoverWide2'>Evapotranspiration</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/input/coverings'><li className='navItem'>
            <div className='iconWrapper' aria-label='vegetative coverings'>
              <i className="fa fa-leaf tooltip" aria-hidden="true">
                <div className='popover popoverWide1'>Vegetative Coverings</div>
              </i>
            </div>
          </li></Link>
          <li onClick={()=>this.run()} className='navItem'>
            <div className='iconWrapper' aria-label='create model'>
              <i className="fa fa-arrow-right tooltip" aria-hidden="true">
                <div className='popover'>Create Model</div>
              </i>
            </div>
          </li>
          <Link to='/app/output/analysis'><li className='navItem'>
            <div className='iconWrapper' aria-label='analysis table'>
              <i className="fa fa-table tooltip" aria-hidden="true">
                <div className='popover'>Analysis Table</div>
              </i>
            </div>
          </li></Link>
          <Link to='/app/output/graphs'><li className='navItem'>
            <div className='iconWrapper' aria-label='analysis graphs'>
              <i className="fa fa-line-chart tooltip" aria-hidden="true">
                <div className='popover'>Analysis Graphs</div>
              </i>
            </div>
          </li></Link>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  general: state.general,
  display: state.display,
  project: state.project,
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);