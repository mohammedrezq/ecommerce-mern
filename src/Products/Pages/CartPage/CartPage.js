import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../../../Shared/UIElements/Message';
import Spinner from '../../../Shared/UIElements/Spinner';
import { addToCart } from '../../../Store/Actions/cartActions';


const CartPage = (props) => {

    const productId = useParams().id;
    console.log(productId)

    const qty = Number(useLocation().search.split("?")[2].split("=")[1]);
    const size = useLocation().search.split("?")[1].split("=")[1];
    // console.log(qty);
    // console.log(size);
    // console.log('CART PAGE PROPS', props);

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    console.log(cartItems)

    const dispatch = useDispatch()


    useEffect(() => {
        if(productId);
        dispatch(addToCart(productId, qty, size))
    },[dispatch, productId, qty, size])

    return(
    <h1>CartPage: </h1>
    );
}



export default CartPage;