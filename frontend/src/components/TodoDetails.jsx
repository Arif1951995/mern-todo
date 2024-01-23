import React from "react";
import useTodosContext from "../hooks/useTodosContext";

function TodoDetails({ todo }) {
  const {dispatch} = useTodosContext();
  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/todos/" + todo._id, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json._id, response.ok);
    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json._id });

    
    }
  };

  return (
    <div className="workout-details">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <span onClick={handleDelete}>delete</span>
    </div>
  );
}

export default TodoDetails;
