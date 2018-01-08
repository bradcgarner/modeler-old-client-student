import React from 'react';
import LandingFooter from './landing-footer';

// landing page prior to login
// route /home
export default function Landing (props) {
  // image of USCG, set to 'cover'
  return (
    <div className='landingContainer'>
      <div className='landing'>
      </div>
      <LandingFooter/>
    </div>
  )
}