import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function basketReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        c => c.product.added === action.payload.product.added
      );
      if (addedItem) {
        var newState = state.map(cartItem => {
          if (cartItem.product.added === action.payload.product.added) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.INCREASE_CART_UNITS:
      var updatedItem = state.find(
        c => c.product.added === action.payload.product.added
      );
      if (updatedItem) {
        var newState2 = state.map(cartItem => {
          if (cartItem.product.added === action.payload.product.added) {
            if (updatedItem.quantity == 1) {
              console.log("silinmesi gereken eleman");
            } else {
              return Object.assign({}, updatedItem, {
                quantity: updatedItem.quantity - 1,
              });
            }
          }
          return cartItem;
        });
        return newState2;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_CART:
      var newState3 = state.filter(
        cartItem => cartItem.product.added !== action.payload.added
      );
      return newState3;
    default:
      return state;
  }
}
