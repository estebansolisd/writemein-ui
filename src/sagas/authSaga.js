import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_START, 
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../actions/authActions";
import { call, put } from "redux-saga/effects";
import { sendRequest } from "../util/api";

export function* handleLogin({ payload }) {
  try {
    yield put({
      type: LOGIN_START
    });

    const { credentials, history } = payload;

    const loginResponse = yield call(
      sendRequest,
      `https://writemein-api.herokuapp.com/users/login`,
      "POST",
      credentials
    );

    const { user, token } = loginResponse.data;

    localStorage.setItem("TOKEN", token);

    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        user
      }
    });

    history.push("/dashboard");
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_ERROR,
    });
  }
}

export function* handleRegister({ payload }) {
  try {
    yield put({
      type: REGISTER_START
    });

    const { credentials, history } = payload;

    const registerResponse = yield call(
      sendRequest,
      `https://writemein-api.herokuapp.com/users`,
      "POST",
      credentials
    );

    const { user, token } = registerResponse.data;

    localStorage.setItem("TOKEN", token);

    yield put({
      type: REGISTER_SUCCESS,
      payload: {
        user
      }
    });

    history.push("/dashboard");
  } catch (error) {
    console.error(error);
    yield put({
      type: REGISTER_ERROR,
    });
  }
}
