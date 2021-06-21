import { combineReducers } from "redux";
import bankReducer from "./bankReducrer"

const reducers = combineReducers({
  bank: bankReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>