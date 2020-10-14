import axios from 'axios';
import * as actionTypes from '../Actions/actionTypes';

export const addToCart = (id) => async(dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);

    dispatch({
        type: actionTypes.CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.Title,
            image: data.Images[0],
            countInStock: data.countInStock,

        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}