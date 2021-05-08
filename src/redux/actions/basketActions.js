import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return { type: actionTypes.ADD_TO_CART, payload: cartItem };
}
export function increaseCartUnits(product) {
  return { type: actionTypes.INCREASE_CART_UNITS, payload: product };
}
export function removeFromCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}
