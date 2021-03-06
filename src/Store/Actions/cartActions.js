import axios from 'axios';
import * as actionTypes from '../Actions/actionTypes';

export const addToCart = (id, qty, size) => async(dispatch, getState) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`);

    // console.log(data);
    const {product} = data;
    // console.log(product)
    // console.log(getState.cartItems)
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

export const addProductToCart = (id, size, qty) => async(dispatch, getState) => {

    try {
        dispatch({type: actionTypes.PRODUCT_ADD_REQUEST})
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`);
        const { product } = data;
        // console.log(product)
        
        dispatch({type: actionTypes.PRODUCT_ADDED_ON_CLICK_SUCCESS,
        payload: {
            product: product.id,
            title: product.Title,
            image: product.Images[0],
            size: size, // to be added to arguments in the function
            price: product.Price,
            qty: qty // to be added to arguments in the function
        },
    })
    let arr = []
        arr = JSON.parse(localStorage.getItem("cartProducts"));
        if( arr === null || undefined ) arr = [];
        localStorage.setItem("cartProducts", JSON.stringify(getState().addProductToCart.cartProducts));
        let filtered;
        arr.push((getState().addProductToCart.cartProducts))
        filtered = arr.filter( // Filter the Array in LocalStorage By size and product(Id)
          (v, i, a) =>
            a.findIndex((t) => t.product === v.product && t.size === v.size) === i // size or product(id) or size etc
        );
        // console.log(filtered)
    localStorage.setItem("cartProducts", JSON.stringify(filtered)) // save to the LocalStorage
    } catch(err) {
        // console.log(err)
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



export const removeProductFromCart = (id, size, qty, price) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.PRODUCT_REMOVED_ON_CLICK,
        payload: id, size, qty, price
    })
    // console.log(getState().addProductToCart.cartProducts)


    // let arr = []
    let arr = JSON.parse(localStorage.getItem("cartProducts")) || [];
    localStorage.setItem("cartProducts", JSON.stringify(getState().addProductToCart.cartProducts));
    // arr.splice(id, 1)
    localStorage.setItem("cartProducts", JSON.stringify(arr)) // save to the LocalStorage

    // localStorage.setItem("cartProducts", JSON.stringify(getState().addProductToCart.cartProducts))
} 

export const updateQuantityFromCart = (id, size, qty, price) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.PRODUCT_UPDATE_QUANTITY,
        payload: id, size, qty, price
    })
} 
// export const setProductSizeAction = (size) => (dispatch) => {
//     return {
//         type: actionTypes.PRODUCT_SIZE_SET,
//         payload: size
//     };
    // dispatch({
    //     type: actionTypes.PRODUCT_SIZE_SET,
    //     payload: size
    // });

    // localStorage.setItem("size", JSON.stringify(size));

// } 
// export const setProductQtyAction = (qty) => (dispatch) => {
//     return {
//         type: actionTypes.PRODUCT_QTY_SET,
//         payload: qty
//     };

    // dispatch({
    //     type: actionTypes.PRODUCT_QTY_SET,
    //     payload: qty
    // });

//     localStorage.setItem("quantity", JSON.stringify(qty));

// } 
// export const setProductQtyAction = (qty) => (dispatch) => {
//     return {
//         type: actionTypes.PRODUCT_QTY_SET,
//         payload: qty
//     };
// } 

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })

    localStorage.setItem("shippingAddress", JSON.stringify(data));
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: actionTypes.CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem("paymentMethod", JSON.stringify(data));
}