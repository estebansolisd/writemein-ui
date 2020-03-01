import { SET_TODOS, SET_VAL } from "../actions/todoActions";

const initialState = {
  todos: [],
  isSidebarOpen: true,
  filter_todo: ""
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload.todos };
    case SET_VAL:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export default todoReducer;
