import { setTodos } from "../actions/todoActions";
import axios from "axios";
import { call, put } from "redux-saga/effects";
// import { sendPrivateRequest } from "../util/api";

export function* handleGetTodos() {
  try {
    const todosResponse = yield call(
      axios.get,
      "https://writemein-api.herokuapp.com/todos",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ4Njk4ODQzMjU0ODVkNWJhODc0MGQiLCJpYXQiOjE1ODE4ODQ5MzN9.lzhJ4ZIkfT_I4YaTGLnZZVBD79WvddWt0RMUtKb2A2o`
        }
      }
    );
    console.log(todosResponse);
    yield put(setTodos(todosResponse));
  } catch (error) {
    console.error(error);
  }
}
