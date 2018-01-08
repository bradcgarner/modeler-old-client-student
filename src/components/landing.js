import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import LandingFooter from './landing-footer';
import './tooltips.css';

// landing page prior to login
// route /home
export function Landing (props) {
  // image of USCG, set to 'cover'
  return (
    <div className='landingContainer'>
      <div className='landing'>
        <div className='iconWrapper' aria-label='home'>
          <i className="fa fa-home tooltip" aria-hidden="true">
            <div className='popover'>Home</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='sign in'>
          <i className="fa fa-sign-in tooltip" aria-hidden="true">
            <div className='popover'>Sign in</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='sign out'>
          <i className="fa fa-sign-out tooltip" aria-hidden="true">
            <div className='popover'>Sign out</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='my account'>
          <i className="fa fa-user tooltip" aria-hidden="true">
            <div className='popover'>My account</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='download'>
          <i className="fa fa-download tooltip" aria-hidden="true">
            <div className='popover'>Download</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='add'>
          <i className="fa fa-plus tooltip" aria-hidden="true">
            <div className='popover'>Add</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='reset to prior save'>
          <i className="fa fa-undo tooltip" aria-hidden="true">
            <div className='popover'>Reset to prior save</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='save'>
          <i className="fa fa-floppy-o tooltip" aria-hidden="true">
            <div className='popover'>Save</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='units of measurement'>
          <i class="fa fa-arrows-h tooltip" aria-hidden="true">
            <div className='popover'>Units of Measurement</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='project areas'>
          <i class="fa fa-object-ungroup tooltip" aria-hidden="true">
            <div className='popover'>Project Areas</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='storms'>
          <i class="fa fa-tint tooltip" aria-hidden="true">
            <div className='popover'>Storms</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='controlled input'>
          <i class="fa fa-shower tooltip" aria-hidden="true">
            <div className='popover'>Controlled Input</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='analysis graphs'>
          <i class="fa fa-line-chart tooltip" aria-hidden="true">
            <div className='popover'>Analysis Graphs</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='analysis table'>
          <i class="fa fa-table tooltip" aria-hidden="true">
            <div className='popover'>Analysis Table</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='filter analysis by dates'>
          <i class="fa fa-calendar tooltip" aria-hidden="true">
            <div className='popover'>Filter Analysis by Dates</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='filter analysis by events'>
          <i class="fa fa-ellipsis-h tooltip" aria-hidden="true">
            <div className='popover'>Filter Analysis by Events</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='import historical storms'>
          <i class="fa fa-upload tooltip" aria-hidden="true">
            <div className='popover'>Import Historical Storms</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='vegetative coverings'>
          <i class="fa fa-leaf tooltip" aria-hidden="true">
            <div className='popover'>Vegetative Coverings</div>
          </i>
        </div>
        <div className='iconWrapper' aria-label='evapotranspiration'>
          <i class="fa fa-cloud-upload tooltip" aria-hidden="true">
            <div className='popover'>Evapotranspiration</div>
          </i>
        </div>

      </div>

      <i class="fa fa-upload" aria-hidden="true"></i>
      <i class="fa fa-leaf" aria-hidden="true"></i>
      <i class="fa fa-cloud-upload" aria-hidden="true"></i>


      <i class="fa fa-area-chart" aria-hidden="true"></i>
      <i class="fa fa-line-chart" aria-hidden="true"></i>
      <i class="fa fa-table" aria-hidden="true"></i>
      <i class="fa fa-shower" aria-hidden="true"></i>
      <i class="fa fa-calendar" aria-hidden="true"></i>
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      <i class="fa fa-object-ungroup" aria-hidden="true"></i>
      <i class="fa fa-arrows-h" aria-hidden="true"></i>


      <LandingFooter/>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Landing);