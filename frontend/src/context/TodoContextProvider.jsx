import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
      case "DELETE_TODO":
      return {
       
        todos: state.todos.filter(todo => todo._id !== action.payload),
      };  
    default:
      return state;
  }
};

const initalState = {
  todos: [],
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initalState);
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
