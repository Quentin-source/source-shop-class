import { IUser } from "../../app/app.interface";


export const setCurrentUser = (user : IUser | null) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
