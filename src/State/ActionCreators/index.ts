import { Dispatch } from 'redux'
import User from "../../Types/User";
import {ActionType} from "../ActionTypes";
import {Action} from "../Actions";

export const AuthUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.AuthState,
            payload: user,
        })
    }
};