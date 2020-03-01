import { setTodos } from "../actions/todoActions";
import axios from "axios";
import { call, put } from "redux-saga/effects";

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
    // I know that this is bad variable naming
    yield put(setTodos(todosResponse.data.data));
  } catch (error) {
    console.error(error);
  }
}