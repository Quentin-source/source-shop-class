import { IAction } from "../reducer.interface";
import { cartActionTypes } from "./cart.types";

const initialState = {
  hidden: false,
};

const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case cartActionTypes.SHOW_DROP_CART:
      return {
        ...state,
        hidden: false,
      };
    case cartActionTypes.HIDE_DROP_CART:
      return {
        ...state,
        hidden: true,
      };
    case cartActionTypes.TOGGLE_DROP_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
