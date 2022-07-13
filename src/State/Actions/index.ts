import User from "../../Types/User";
import {ActionType} from "../ActionTypes";


interface AuthStateAction {
    type: ActionType.AuthState
    payload: User
}

export type Action = AuthStateAction // use | to add more interfaces