import { SET_TODOS, SET_VAL } from "../actions/todoActions";

const initialState = {
  todos: [],
  isSidebarOpen: true
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, ...action.payload };
    case SET_VAL:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export default todoReducer;
