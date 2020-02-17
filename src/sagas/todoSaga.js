import { setTodos } from "../actions/todoActions";
import { call, put } from "redux-saga/effects";
import { sendPrivateRequest } from "../util/api";

export function* handleGetTodos() {
  try {
    const todosResponse = yield call(
      sendPrivateRequest,
      "https://writemein-api.now.sh/todos",
      "get"
    );
    console.log(todosResponse);
    yield put(setTodos(todosResponse));
  } catch (error) {
    console.error(error);
  }
}
