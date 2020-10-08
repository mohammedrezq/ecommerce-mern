import React from 'react'

import { connect } from 'react-redux';

const CartPage = (props) => {
    console.log('CART PAGE PROPS', props);

    let productsInCart = [];
    Object.keys(props.productsNumber.products).map( (item) => {
        console.log("ONE PRODUCT FROM CART PAGE" ,props.productsNumber.products[item])
    })



    return(
    <h1>CartPage: {props.productsNumber.cartNumbers}</h1>
    );
}

const mapStateToProps = state => {
    return {
        productsNumber: state.addtoCartReducer
      }
}

// mapDispatchToProps = dispatch => {
//     return {
//         getProductsNumber: () => dispatch(actions.getProductsNumber())
//       }
// }

export default connect(mapStateToProps)(CartPage);