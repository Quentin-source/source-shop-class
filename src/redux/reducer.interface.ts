import store from "./store";

export interface IAction {
    type : string;
    payload : any;
}

export type IRootReducer = ReturnType<typeof store.getState>