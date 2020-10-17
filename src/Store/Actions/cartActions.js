import axios from 'axios';
import * as actionTypes from '../Actions/actionTypes';

export const addToCart = (id, qty, size) => async(dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);

    // console.log(data);
    const {product} = data;
    // console.log(product)
    console.log(getState.cartItems)
    dispatch({
        type: actionTypes.CART_ADD_ITEM,
        payload: {
            product: product.id,
            name: product.Title,
            image: product.Images,
            size: size,
            price: product.Price,
            qty: qty
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const addProductToCart = (id) => async(dispatch, getState) => {

    try {
        dispatch({type: actionTypes.PRODUCT_ADD_REQUEST})
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        const { product } = data;
        console.log(product)
        
        dispatch({type: actionTypes.PRODUCT_ADDED_ON_CLICK_SUCCESS,
        payload: {
            product: product.id,
            title: product.Title,
            image: product.Images[0],
            // size: size, // to be added to arguments in the function
            price: product.Price,
            // qty: qty // to be added to arguments in the function
        },
    })
    let arr = []
        arr = JSON.parse(localStorage.getItem("cartProducts"));
        if( arr === null || undefined ) arr = [];
    localStorage.setItem("cartProducts", JSON.stringify(getState().addProductToCart.cartProducts));
    arr.push((getState().addProductToCart.cartProducts))
    localStorage.setItem("cartProducts", JSON.stringify(arr)) // save to the LocalStorage
    } catch(err) {
        console.log(err)
        dispatch({
            type: actionTypes.PRODUCT_ADDED_ON_CLICK_FAIL,
            payload:
              err.response && err.response.data.message
                ? err.response.data.message
                : err.message,
          });
    }

    // console.log(data);
    // const {product} = data;
    // console.log(product)
    // console.log(getState.cartItems)
    // dispatch({
    //     type: actionTypes.CART_ADD_ITEM,
    //     payload: {
    //         product: product.id,
    //         name: product.Title,
    //         image: product.Images,
    //         size: size,
    //         price: product.Price,
    //         qty: qty
    //     }
    // });
}