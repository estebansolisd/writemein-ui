export const LOAD_TODOS = "LOAD_TODOS";
export const SET_TODOS = "SET_TODOS";
export const SET_VAL = "SET_VAL";

export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_START = "UPDATE_TODO_START";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_ERROR = "UPDATE_TODO_ERROR";

export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_START = "CREATE_TODO_START";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_ERROR = "CREATE_TODO_ERROR";

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: {
    todos
  }
});

export const loadTodos = () => ({
  type: LOAD_TODOS
});

export const setVal = (name, value) => ({
  type: SET_VAL,
  payload: {
    name,
    value
  }
});

export const deleteTodo = _id => ({
  type: DELETE_TODO,
  payload: {
    _id
  }
})

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: {
    todo
  }
})

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: {
    todo
  }
})