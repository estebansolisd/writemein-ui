export const LOAD_TODOS = "LOAD_TODOS";
export const SET_TODOS = "SET_TODOS";
export const SET_VAL = "SET_VAL";

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
