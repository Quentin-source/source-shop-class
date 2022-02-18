import { User } from '@firebase/auth-types';
import firebase from 'firebase/compat';

export interface IProps {}
export interface IState extends firebase.firestore.DocumentData {
  id?: string;
  currentUser: User | null;
}
