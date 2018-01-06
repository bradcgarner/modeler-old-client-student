import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionsDisplay from '../actions/display';
import * as actionsGeneral from '../actions/general';

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
    <li>Configure</li>
    <li>Projects</li>
    <li>Storms</li>
    <li>Et</li>
    <li>Hydrographs</li>
    <li>Analysis</li>
  </ul>;
    return (
      <nav>
        <h1>GRSWM</h1>
        <ul>
          <li><Link to='/home'>home</Link></li>
          <li><Link to='/user/login'>login</Link></li>
          <li><Link to='/user/create'>create</Link></li>
          <li><Link to='/user/dashboard'>dashboard</Link></li>
          <li><Link to='/app/input/configure/units'>general</Link></li>
          <li><Link to='/app/input/configure/areas'>areas</Link></li>
          <li><Link to='/app/input/h2o/intervals'>storms</Link></li>
          <li><Link to='/app/input/h2o/import'>import</Link></li>
          <li><Link to='/app/input/h2o/controlled'>controlled</Link></li>
          <li><Link to='/app/input/et'>et</Link></li>
          <li><Link to='/app/input/coverings'>coverings</Link></li>
          <li><Link to='/app/output/analysis'>analysis</Link></li>
          <li><Link to='/app/output/graphs'>graphs</Link></li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  general: state.general,
});

export default connect(mapStateToProps)(NavBar);