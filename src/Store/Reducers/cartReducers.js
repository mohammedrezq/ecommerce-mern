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

export const addProductToCartReducer = (state = {cartProducts: []}, action) => {
    switch(action.type){
        case actionTypes.PRODUCT_ADD_REQUEST:
            return {cartProducts: []}
        case actionTypes.PRODUCT_ADDED_ON_CLICK_SUCCESS:
            const item = action.payload;
                return {
                ...state,
                cartProducts:  item
                }
        case actionTypes.PRODUCT_ADDED_ON_CLICK_FAIL:
            return{
                error: action.payload
            }
        case actionTypes.PRODUCT_REMOVED_ON_CLICK:
            return{
                ...state,
                // cartProducts: state.cartProducts.filter( x => x.product !== action.payload )
            }
        default:
            return state;
    }

}

export const setProductFeatureReducer = (state= { Qty: 1 }, action) => {
    switch(action.type) {
        // case actionTypes.PRODUCT_SIZE_SET:
        //     return {
        //         ...state,
        //         Size: action.payload
        //     }
        case actionTypes.PRODUCT_QTY_SET:
            return {
                ...state,
                Qty: action.payload
            }
        default:
            return state
    }
}
// export const setProductSizeReducer = (state= {}, action) => {
//     switch(action.type) {

//         default:
//             return state
//     }
// }



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
