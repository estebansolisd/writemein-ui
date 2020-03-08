import {
  SET_TODOS,
  SET_VAL,
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  UPDATE_TODO_START,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR
} from "../actions/todoActions";

const initialState = {
  todos: [],
  filter_todo: "",
  isDeletingTodo: false,
  isUpdatingTodo: false,
  isCreatingTodo: false,
  errors: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload.todos };
    case DELETE_TODO_START:
      return { ...state, isDeletingTodo: true };
    case DELETE_TODO_SUCCESS:
      return { ...state, isDeletingTodo: false, todos: action.payload.todos };
    case DELETE_TODO_ERROR:
      return {...state, errors: [...state.errors, action.payload.error ] } 
    case UPDATE_TODO_START:
      return { ...state, isUpdatingTodo: true };
    case UPDATE_TODO_SUCCESS:
      return { ...state, isUpdatingTodo: false, todos: action.payload.todos };
    case UPDATE_TODO_ERROR  :
      return {...state, errors: [...state.errors, action.payload.error ] } 
    case CREATE_TODO_START:
      return { ...state, isCreatingTodo: true };
    case CREATE_TODO_SUCCESS:
      return { ...state, isCreatingTodo: false, todos: action.payload.todos };
    case CREATE_TODO_ERROR  :
      return {...state, errors: [...state.errors, action.payload.error ] } 
    case SET_VAL:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export default todoReducer;
