import * as actionTypes from "../Actions/actionTypes";







export const cartReducer = (state = { cartItems: [] } , action) => {
  switch(action.type) {
      case actionTypes.CART_ADD_ITEM:
          const item = action.payload

          const existItem = state.cartItems.find(p => p.product === item.product);
          if(existItem) {
              return {
                  ...state,
                  cartItems: state.cartItems.map( p => p.product === existItem.product ? item : p )   
              }

          } else {
              return {
                  ...state,
                  cartItems: [...state.cartItems, item]
              }
          }
      default:
          return state
  }
}




// const initialState = {
//   cartNumbers: 0,
//   cartTotal: 0,
//   products: {
//     ShoesFromNike: {
//       productName: "Shoes From Nike",
//       productPrice: 149.99,
//       numbers: 0,
//       isInCart: false,
//     },
//   },
// };

// export const addtoCartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_PRODUCT_TO_CART:
//       let setQuantity = { ...state.products[action.payload] };
//     //   console.log("SET QUANTITY", setQuantity);
//       setQuantity.numbers += 1;
//       setQuantity.isInCart = true;
//       console.log('SET Quantity', setQuantity);
//       return {
//         ...state,
//         cartNumbers: state.cartNumbers + 1,
//         cartTotal: state.cartTotal + state.products[action.payload].productPrice,
//         products: {
//             ...state.products,
//             [action.payload]: setQuantity,
//         }
//       };
//     case actionTypes.GET_PRODUCT_NUMBER_CART:
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// };

// export default addtoCartReducer;