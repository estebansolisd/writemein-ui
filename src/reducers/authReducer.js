import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../actions/authActions";

const initialState = {
  isErrorOnLogin: false,
  isLoggingIn: false,
  isRegisteringIn: false,
  isErrorOnRegister: false,
  errorLoginMessage: "",
  errorRegisterMessage: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isErrorOnLogin: false,
        isLoggingIn: true,
        errorLoginMessage: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isErrorOnLogin: false,
        isLoggingIn: false,
        errorLoginMessage: ""
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isErrorOnLogin: true,
        isLoggingIn: false,
        errorLoginMessage: "Failing to logging in, please try again"
      };
    case REGISTER_START:
      return {
        ...state,
        isErrorOnRegister: false,
        isRegisteringIn: true,
        errorRegisterMessage: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isErrorOnRegister: false,
        isRegisteringIn: false,
        errorRegisterMessage: ""
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isErrorOnRegister: true,
        isRegisteringIn: false,
        errorLoginMessage: "Failing to register in, please try again"
      };
    default:
      return state;
  }
};

export default authReducer;
