import { cartActionTypes } from "./cart.types";


export const hideDropCart = () => ({
  type: cartActionTypes.HIDE_DROP_CART
});
export const showDropCart = () => ({
  type: cartActionTypes.SHOW_DROP_CART
});
export const toggleDropCart = () => ({
  type: cartActionTypes.TOGGLE_DROP_CART,
});
