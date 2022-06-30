import User from "../../Types/User";
import {Action} from "../Actions";
import {ActionType} from "../ActionTypes";

const initialState: User = {
    isLoggedIn: false,
};

const userReducer = (state: User = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.AuthState:
           return {...state, isLoggedIn: action.payload.isLoggedIn};
        default:
            return state;
    }
};

export default userReducer;