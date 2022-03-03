import { IAction } from "../reducer.interface";


const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action : IAction) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
