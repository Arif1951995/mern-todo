import React, { useEffect } from "react";
import useTodosContext from "../hooks/useTodosContext";
import TodoDetails from "./TodoDetails";
import CreateForm from "./CreateForm";

function Home() {
  const { todos, dispatch } = useTodosContext();
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:4000/api/todos");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
      if (!response.ok) {
        console.log(response.error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="home">
      <div className="todos">
      {todos.map((todo) => (
        <TodoDetails key={todo._id} todo={todo} />
      ))}

      </div>
      <CreateForm />
    </div>
  );
}

export default Home;
