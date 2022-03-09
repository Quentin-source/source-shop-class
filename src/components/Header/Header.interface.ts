import { User } from "@firebase/auth-types";

export interface IProps{
    currentUser : null | User;
    cartStatus : Boolean;
    toggleDropCart : Function;
    
}