import { takeEvery, takeLatest } from "redux-saga/effects";
import { LOAD_TODOS, DELETE_TODO, UPDATE_TODO, CREATE_TODO } from "../actions/todoActions";
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
}

export default rootSaga;
