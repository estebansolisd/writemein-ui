import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  todoReducer,
  authReducer
});

export default rootReducer;
