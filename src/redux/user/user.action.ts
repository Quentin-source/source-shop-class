import { IUser } from "../../app/app.interface";
import { userActionTypes } from "./user.types";


export const setCurrentUser = (user : IUser | null) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
