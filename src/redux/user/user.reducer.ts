import { IAction } from "../reducer.interface";
import { IUser } from "../../app/app.interface";
import { userActionTypes } from "./user.types";

const initialState = {
  currentUser: null as IUser | null,
};

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
