
export interface IProps {}

export interface IUser {
    id: string;
    createdAt: Date;
    displayName: String;
    email: String;
}

export interface IState {
  currentUser: IUser | null;
}