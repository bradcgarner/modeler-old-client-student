import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// modal for about to slide up over landing
// route /home
export function About (props) {

  const about = props.display.view === 'about' ? 'landing' : 'about';
  const aboutClass = props.display.view === 'about' ? 'aboutContainerOpen' : 'aboutContainer' ;
  
  return (
    <div className={aboutClass}>
      <div className='labelDiv'>
        <h3 onClick={()=>props.dispatch(actionsDisplay.changeView(about))}>About</h3>
      </div>
      <div className='aboutContents'>
        <p>Some text</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(About);