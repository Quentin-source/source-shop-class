import { IAction } from "../reducer.interface";
import { cartActionTypes } from "./cart.types";

const initialState = {
  cartStatus: false,
};

const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case cartActionTypes.SHOW_DROP_CART:
      return {
        ...state,
        cartStatus: false,
      };
    case cartActionTypes.HIDE_DROP_CART:
      return {
        ...state,
        cartStatus: true,
      };
    case cartActionTypes.TOGGLE_DROP_CART:
      return {
        ...state,
        cartStatus: !state.cartStatus,
      };
    default:
      return state;
  }
};

export default cartReducer;
