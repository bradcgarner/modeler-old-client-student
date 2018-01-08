import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionsDisplay from '../actions/display';
import * as actionsGeneral from '../actions/general';
import './navbar.css';

// nav bar to main app, after login
// routes /app...
export class NavBar extends React.Component {
  componentDidMount() {
    if (!(this.props.general.initialized)) {
      this.props.dispatch(actionsGeneral.initialize());
    }
  }

  render() {
    const ultimateUl = <ul>
    <li className='navItem'>Configure</li>
    <li className='navItem'>Projects</li>
    <li className='navItem'>Storms</li>
    <li className='navItem'>Et</li>
    <li className='navItem'>Hydrographs</li>
    <li className='navItem'>Analysis</li>
  </ul>;
    return (
      <nav>
        <ul>
          <Link to='/home'><li className='home'>GRSWM</li></Link>
          <Link to='/user/login'><li className='navItem'>login</li></Link>
          <Link to='/user/create'><li className='navItem'>create</li></Link>
          <Link to='/user/dashboard'><li className='navItem'>dashboard</li></Link>
          <Link to='/app/input/configure/units'><li className='navItem'>general</li></Link>
          <Link to='/app/input/configure/areas'><li className='navItem'>areas</li></Link>
          <Link to='/app/input/h2o/intervals'><li className='navItem'>storms</li></Link>
          <Link to='/app/input/h2o/import'><li className='navItem'>import</li></Link>
          <Link to='/app/input/h2o/controlled'><li className='navItem'>controlled</li></Link>
          <Link to='/app/input/et'><li className='navItem'>et</li></Link>
          <Link to='/app/input/coverings'><li className='navItem'>coverings</li></Link>
          <Link to='/app/output/analysis'><li className='navItem'>analysis</li></Link>
          <Link to='/app/output/graphs'><li className='navItem'>graphs</li></Link>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(NavBar);