import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to input. No user input. Displays ET tables. User selects ET table in aside.
// route app/input/et
// 'aside' components have more specific controlling exact paths
export function InputET (props) {

  const selectedEtTable = 0; // change to read from state

  const columnWidthSetters = props.general.etTableTime.map((time,index)=>{
    return <col key={index} style={{width: '0.0833%'}}></col>;
  });
  columnWidthSetters.unshift(<col key={0} style={{width: '0.0833%'}}></col>);

  const tableHeaders = props.general.etTableTime.map((time,index)=>{
    return <th key={index + 1}>{time}</th>
  });
  tableHeaders.unshift(<th scope='row' key={0}></th>);

  const tableGroup = props.general.etTables[selectedEtTable].table.map((table,index)=>{
    const tableBody = table.map((row,index)=>{
      const tableRow = row.map((cell,index)=>{
        const classGroup = Math.floor(cell/0.000075) || 0;
        return <td className ={`etTableCell${classGroup}`} key={`${index}cell`}>{cell}</td>
      });
      const pct = (index +1) * props.general.vwcIncrementEt;
      return <tr key={index}><th scope='row'>{pct}%</th>{tableRow}</tr>
    });
    return <div className='etTableContainer'>
      <h3>{props.general.months[index]}</h3>
      <table key={index} style={{width: '100%'}}>
        <tbody>
          <tr>{tableHeaders}</tr>
          {tableBody}
        </tbody>
      </table>
    </div>;
  });

  return (
    <section>
      <h4>Input ET</h4>
      {tableGroup}
    </section>
  )
}

const mapStateToProps = state => ({
  general: state.general,
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputET);