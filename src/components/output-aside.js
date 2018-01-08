import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import OutputAsideAnalysisDates from './output-aside-analysis-dates';
import OutputAsideAnalysisEvents from './output-aside-analysis-events';
import './output-aside.css';

// inside outputAside.  Input for managing graph data (e.g. run graphc for certain dates)
// route /output/graphs
export function OutputAside(props) {

  const toggleSelector = value => {
    props.dispatch(actionsDisplay.toggleAnalysisRange(value));
  }
  
    const selector = props.display.analysisRange === 'dates' ? <OutputAsideAnalysisDates/>
    : <OutputAsideAnalysisEvents/> ;

  return (
    <aside>
      <div className='asideContainer'>
        <div className='outputRangeSelectorButtons'>

          <div onClick={()=>toggleSelector('dates')}
            className='iconWrapper' aria-label='filter analysis by dates'>
            <i className="fa fa-calendar tooltip" aria-hidden="true">
              <div className='popover'>Filter Analysis by Dates</div>
            </i>
          </div>
          <div onClick={()=>toggleSelector('events')}
            className='iconWrapper' aria-label='filter analysis by events'>
            <i class="fa fa-ellipsis-h tooltip" aria-hidden="true">
              <div className='popover'>Filter Analysis by Events</div>
            </i>
          </div>
        </div>
        {selector}
      </div>
    </aside>
  )
}


const mapStateToProps = state => ({
  display: state.display,
});

export default connect(mapStateToProps)(OutputAside);