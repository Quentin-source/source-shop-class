import store from "./store/store";

export interface IAction {
    type : string;
    payload? : any;
}

export type IRootReducer = ReturnType<typeof store.getState>

export type IDispatchAction = typeof store.dispatch