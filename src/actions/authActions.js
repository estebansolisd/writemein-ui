export const LOGIN = "LOGIN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER = "REGISTER";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const login = (credentials, history) => ({
  type: LOGIN,
  payload: {
    credentials,
    history
  }
})

export const register = (credentials, history) => ({
  type: REGISTER,
  payload: {
    credentials,
    history
  }
})