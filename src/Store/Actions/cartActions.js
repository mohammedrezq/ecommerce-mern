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