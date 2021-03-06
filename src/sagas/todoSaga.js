import {
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  SET_TODOS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_START,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR
} from "../actions/todoActions";
import { sendPrivateRequest } from "../util/api";
import { call, put } from "redux-saga/effects";

export function* handleGetTodos() {
  try {
    const todosResponse = yield call(
      sendPrivateRequest,
      "https://writemein-api.herokuapp.com/todos",
      "GET"
    );

    yield put({
      type: SET_TODOS,
      payload: {
        todos: todosResponse.data.data
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export function* handleDeleteTodo({ payload }) {
  try {
    yield put({
      type: DELETE_TODO_START
    });

    const { _id } = payload;
    const deleteTodoResponse = yield call(
      sendPrivateRequest,
      `https://writemein-api.herokuapp.com/todos/${_id}`,
      "DELETE"
    );

    yield put({
      type: DELETE_TODO_SUCCESS,
      payload: {
        todos: deleteTodoResponse.data.data
      }
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: DELETE_TODO_ERROR,
      payload: {
        error: "Failing to delete the todo, please try again"
      }
    });
  }
}

export function* handleUpdateTodo({ payload }) {
  try {
    yield put({
      type: UPDATE_TODO_START
    });

    const { todo } = payload;
    const { _id, is_completed, text } = todo;
    const updateTodoResponse = yield call(
      sendPrivateRequest,
      `https://writemein-api.herokuapp.com/todos/${_id}`,
      "PUT",
      {
        is_completed,
        text
      }
    );

    yield put({
      type: UPDATE_TODO_SUCCESS,
      payload: {
        todos: updateTodoResponse.data.data
      }
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPDATE_TODO_ERROR,
      payload: {
        error: "Failing to update the todo, please try again"
      }
    });
  }
}


export function* handleCreateTodo({ payload }) {
  try {
    yield put({
      type: CREATE_TODO_START
    });

    const { todo } = payload;
    const createTodoResponse = yield call(
      sendPrivateRequest,
      `https://writemein-api.herokuapp.com/todos`,
      "POST",
      todo
    );

    yield put({
      type: CREATE_TODO_SUCCESS,
      payload: {
        todos: createTodoResponse.data.data
      }
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: CREATE_TODO_ERROR,
      payload: {
        error: "Failing to create the todo, please try again"
      }
    });
  }
}
