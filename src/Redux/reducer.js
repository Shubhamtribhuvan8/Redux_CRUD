import {
  ADD,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_ITEM,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  REDUCE,
  TODO_FAILURE,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "./actionTypes";

const initialState = {
  count: 19,
  todos: [],
  isLoding: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    //counter
    case ADD:
      return { ...oldState, count: oldState.count + action.payload };
    case REDUCE:
      return { ...oldState, count: oldState.count - action.payload };
    //get
    case TODO_REQUEST:
      return { ...oldState, isLoding: true };
    case TODO_SUCCESS:
      return { ...oldState, isLoding: false, todos: action.payload };
    case TODO_FAILURE:
      return { ...oldState, isLoding: false, isError: true };
    //post
    case ADD_TODO_REQUEST:
      return { ...oldState, isLoding: true };
    case ADD_TODO_SUCCESS:
      return {
        ...oldState,
        isLoding: false,
        todos: [...oldState.todos, action.payload],
      };
    case ADD_TODO_FAILURE:
      return { ...oldState, isLoding: false, isError: true };
    //delete
    case DELETE_TODO_REQUEST:
      return { ...oldState, isLoding: true };
      
      case DELETE_TODO_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          todos: oldState.todos.filter(todo => todo.id !== action.payload.id),
        };
      
    case DELETE_TODO_FAILURE:
      return { ...oldState, isLoding: false, isError: true };

      case DELETE_ITEM:
          return {
            ...oldState,
            items: oldState.items.filter(item => item.id !== action.payload)
          };

    default:
      return oldState;
  }
};
export { reducer };
