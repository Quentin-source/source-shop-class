import { User } from "@firebase/auth-types";
import { IUser } from "../../interfaces/app.interface";


export const setCurrentUser = (user : IUser | User) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
