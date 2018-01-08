import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';
import * as helpers from '../actions/helpers';
import './input-aside-config-area-selector.css';

// interior to inputAside. Input of areas.
// route app/input/configure/areas
export function InputAsideConfigAreaSelector (props) {

  const focusArea = value => {
    const selectedName = helpers.convertStringKeysToString(value);
    const focusId = helpers.queryObject(selectedName, props.project.areas, 'name', 'id')
    props.dispatch(actionsDisplay.focusArea(focusId));
  }

  const addArea = () => {
    let hiKey = 0;
    for (let key in props.project.areas) {
      const intKey = parseInt(key,10);
      hiKey = ( typeof intKey === 'number' && intKey > hiKey ) ? intKey : hiKey ;
    }
    const area = {
      id: hiKey + 1,
      name: '',
      area: null,
      covering: props.project.areas[props.display.focusArea].covering,
      runoff: null,
      cda: [],
      slope: props.project.areas[props.display.focusArea].slope,
      etTable: props.project.areas[props.display.focusArea].etTable,
    };
    props.dispatch(actionsProject.addArea(area))
    props.dispatch(actionsDisplay.focusArea(area.id))

  }

  const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

  const listAreas = props.project.areas.list;

  return (
    <div className='areaSelector'>
      <form className='asideInputForm'>
        <div className='labelFieldPair'>
          <label
            className='inputLabel'
            htmlFor='name'>area
          </label>
          <Field
            name='name'
            id='name'
            type='text'
            className='inputField'
            component={renderDropdownList}
            data={listAreas}
            onChange={(value) => focusArea(value)} />
        </div>
      </form>
      <div onClick={()=>addArea()} className='iconWrapper' aria-label='add area'>
        <i className="fa fa-plus tooltip" aria-hidden="true">
          <div className='popover'>Add Area</div>
        </i>
      </div>
    </div>
  )
}

{/* <button onClick={()=>addArea()}>
add area
</button> */}

const mapStateToProps = state => ({
  user: state.user,
  display: state.display,
  project: state.project,
  initialValues: {name: state.project.areas[state.project.areas.focus].name},
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideConfigAreaSelector'})
)(InputAsideConfigAreaSelector);