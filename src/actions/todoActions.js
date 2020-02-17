export const LOAD_TODOS = "LOAD_TODOS";
export const SET_TODOS = "SET_TODOS";

export const setTodos = todos => ({
  type: SET_TODOS,
  payload: {
    todos
  }
});

export const loadTodos = () => ({
  type: LOAD_TODOS
});
