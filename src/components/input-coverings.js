import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import './tables.css';

// interior to input. No user input.  Displays covering efficiency tables. 
// User selects coverings in configure/areas.
// route app/input/coverings
// 'aside' components have more specific controlling exact paths
export function InputCoverings (props) {

  const selectedCoveringKey = 0; // change to read from state

  const tableHeaders = [<th scope='row' key={0}></th>];
  for (let cols = 1; 
    cols <= props.general.rainIntensityIncrements; 
    cols++ ) {
      tableHeaders.push(<th key={cols}>{ props.general.rainIntensityIncrement * cols}</th>)
    }

  const tableBody = props.general.coverings[selectedCoveringKey].efficiency.map((row,index)=>{
    const tableRow = row.map((cell,index)=>{
      const classGroup = Math.floor(cell/10) || 0;
      return <td className ={`effTableCell${classGroup}`} key={`${index}cell`}>{cell}</td>
    });

    const pct = index * props.general.vwcIncrementEff;
    return <tr key={index}><th scope='row'>{pct}%</th>{tableRow}</tr>
  })
  
  const coveringEff = <table style={{width: '100%'}}>
    <tbody>
      <tr>{tableHeaders}</tr>
      {tableBody}
    </tbody>
  </table>

  return (
    <section>
      <h4>Input Coverings</h4>
      {coveringEff}
    </section>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputCoverings);