import { SET_TODOS } from "../actions/todoActions";

const initialState = {
  todos: []
};


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default todoReducer;
