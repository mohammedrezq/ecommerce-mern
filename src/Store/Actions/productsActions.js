import * as actionTypes from './actionTypes';

export const addToCart = (productName) => {
    return{
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: productName
    }
}

export const getProductsNumber = () => {
    return {
        type: actionTypes.GET_PRODUCT_NUMBER_CART
    }
}
