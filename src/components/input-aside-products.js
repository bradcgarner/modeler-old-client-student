import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. No user input. Displays sources of product efficiency table data.
// route app/input/products
export function InputAsideProducts (props) {

  const selectProduct = id => {
    props.dispatch(actionsProject.placeholder())
  }

  const productsSelectedList = [];
  const productsNotSelectedList = [];
  for (let key in props.general.products) {
    const theProduct = {...props.general.products[key]};
    if (key !== 'list') {
      if (props.project.products.key) {
        theProduct.used = true;
        productsSelectedList.push(theProduct);
      } else {
        productsNotSelectedList.push(theProduct);      
      }
    }
  }
  const productsList = [...productsSelectedList, ...productsNotSelectedList];
  const productsListFormatted = productsList.map((product,index) => {
    return <li onClick={()=>selectProduct(product.id)} key={index}>{product.name}</li>
  })
  
  return (
    <div>
      <h4>aside products</h4>
      <ul>
        {productsListFormatted} 
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  general: state.general,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputAsideProducts);