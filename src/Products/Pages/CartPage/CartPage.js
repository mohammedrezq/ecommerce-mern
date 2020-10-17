import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Message from "../../../Shared/UIElements/Message";
import Spinner from "../../../Shared/UIElements/Spinner";
import { addToCart } from "../../../Store/Actions/cartActions";

const CartPage = (props) => {
  const productId = useParams().id;
  console.log(productId);

  // const qty = Number(useLocation().search.split("?")[2].split("=")[1]);
  // const size = useLocation().search.split("?")[1].split("=")[1];
  // console.log(qty);
  // console.log(size);
  // console.log('CART PAGE PROPS', props);

  // const cart = useSelector(state => state.cart);
  // const { cartItems } = cart;

  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  // console.log(productToCart)
  const { err, loadingStatus, cartProducts } = productToCart;

  // console.log(cartProducts);


  let arr = []
  arr = JSON.parse(localStorage.getItem("cartProducts"));
  if( arr === null || undefined ) arr = [];
localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
localStorage.setItem("cartProducts", JSON.stringify(arr)) // save to the LocalStorage

console.log(arr)


  const productArr = arr.map((p) => p);
  const nr = productArr.map((x) => x[0]);
  const productItem = nr.map((item) => item); // all items in LocalStorage

  console.log(productItem);
  
//   let filtered;
//   filtered = productItem.filter(
//     (v, i, a) =>
//       a.findIndex((t) => t.title === v.title && t.product === v.product) === i // title or product(id) or size etc
//   );
//   console.log(filtered);

//   console.log(productItem.map((item) => item.title));
  //     const listOfTags = productItem,
  //     keys = ['title', 'product'],
  //     filtered = listOfTags.filter(
  //         (s => o =>
  //             (k => !s.has(k) && s.add(k))
  //             (keys.map(k => o[k]).join('|'))
  //         )
  //         (new Set)
  //     );

  // console.log(filtered);

  // const unique = [];

  // productItem.map(x => {
  //     console.log(x.title)
  //     return (
  //         unique.filter(a => {
  //             console.log(a.title)
  //             return (
  //             a.title !== x.title && a.product !== x.product
  //             )
  //         }
  //             ).length > 0 ? null : unique.push(x)
  //     )
  // }
  //     );

  // console.log(unique)

  // const dispatch = useDispatch()

  // useEffect(() => {
  // if(productId);
  //     dispatch(addToCart(productId))
  // },[dispatch])

  return (
      <>
      { loadingStatus ? <Spinner /> : err ? <Message>{err}</Message> : (
    <div>
      CartPage: {productItem.length}
      <div>Price: </div>
      {productItem && productItem.map((item, i) => {
        return (
            <div key={i}>
        <div>{(item) && item.price}</div>
        <div>{(item) && item.title}</div>
        <img src={(item) && item.image} />
        </div>
        )
      })}
    </div>
      )
      }
      </>
  );
};

export default CartPage;
