import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to input. No user input. Displays ET tables. User selects ET table in aside.
// route app/input/et
// 'aside' components have more specific controlling exact paths
export function InputET (props) {

  const selectedEtTable = 0;

  const tableHeaders = props.general.etTableTime.map((time,index)=>{
    <th key={index + 1}>{time}</th>
  });
  tableHeaders.unshift(<th scope='row' key={0}></th>);

  const tableGroup = props.general.etTables[selectedEtTable].table.map((table,index)=>{
    const tableBody = table.map((row,index)=>{
      const tableRow = row.map((cell,index)=>{
        const classGroup = Math.floor(cell/0.0001) || 0;
        return <td className ={`etTableCell${classGroup}`} key={`${index}cell`}>{cell}</td>
      });
      const pct = (index +1) * props.general.vwcIncrementEt;
      return <tr key={index}><th scope='row'>{pct}%</th>{tableRow}</tr>
    });
    return <table key={index}><tbody><tr>{tableHeaders}</tr>{tableBody}</tbody></table>;
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