import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  LOAD_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  CREATE_TODO
} from "../actions/todoActions";
import { LOGIN, REGISTER } from "../actions/authActions";
import { handleLogin, handleRegister } from "./authSaga";
import {
  handleGetTodos,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCreateTodo
} from "./todoSaga";

function* rootSaga() {
  yield takeEvery(LOAD_TODOS, handleGetTodos);
  yield takeLatest(DELETE_TODO, handleDeleteTodo);
  yield takeLatest(UPDATE_TODO, handleUpdateTodo);
  yield takeLatest(CREATE_TODO, handleCreateTodo);
  yield takeLatest(LOGIN, handleLogin);
  yield takeLatest(REGISTER, handleRegister);
}

export default rootSaga;
