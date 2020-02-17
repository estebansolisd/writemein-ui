import { takeEvery } from "redux-saga/effects";
import { LOAD_TODOS } from "../actions/todoActions";
import { handleGetTodos } from "./todoSaga";

function* rootSaga() {
    yield takeEvery(LOAD_TODOS, handleGetTodos);
}

export default rootSaga;
