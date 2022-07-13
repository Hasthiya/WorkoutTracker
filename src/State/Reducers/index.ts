import { combineReducers } from 'redux'
import userReducer from "./userReducer";

const reducers = combineReducers({
    user: userReducer
    //add more reducers here
});

export default reducers;

export type State = ReturnType<typeof reducers>