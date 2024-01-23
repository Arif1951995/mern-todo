import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

function useTodosContext() {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error(
      "TodoContext should be only used in the scope of TodosContextProvider"
    );
  }
  return context;
}

export default useTodosContext;
