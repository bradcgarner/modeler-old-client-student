import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to input. No user input.  Displays product efficiency tables. 
// User selects products in configure/areas.
// route app/input/products
// 'aside' components have more specific controlling exact paths
export function InputProducts (props) {

  const selectedProductKey = 0;

  const tableHeaders = [<th scope='row' key={0}></th>];
  for (let cols = 1; 
    cols <= props.general.rainIntensityIncrements; 
    cols++ ) {
      tableHeaders.push(<th key={cols}>{ props.general.rainIntensityIncrement * cols}</th>)
    }

  const tableBody = props.general.products[selectedProductKey].efficiency.map((row,index)=>{
    const tableRow = row.map((cell,index)=>{
      const classGroup = Math.floor(cell/10) || 0;
      return <td className ={`effTableCell${classGroup}`} key={`${index}cell`}>{cell}</td>
    });

    const pct = index * props.general.vwcIncrementEff;
    return <tr key={index}><th scope='row'>{pct}%</th>{tableRow}</tr>
  })
  
  const productEff = <table>
    <tbody>
      <tr>{tableHeaders}</tr>
      {tableBody}
    </tbody>
  </table>

  return (
    <section>
      <h4>Input Products</h4>
      {productEff}
    </section>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputProducts);