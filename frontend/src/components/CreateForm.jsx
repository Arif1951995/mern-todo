import React, { useState } from "react";
import useTodosContext from "../hooks/useTodosContext";

function CreateForm() {
  const { todos, dispatch } = useTodosContext();
  const [title, setTitle] = useState("");
  const [disc, setDesc] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/api/todos", {
        method: "POST",
      body: JSON.stringify({ title, disc }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json, response.ok)
    if (response.ok) {
      dispatch({ type: "ADD_TODO", payload: json });
      setDesc("");
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Title</span>
        <input value={title} onChange={(ev) => setTitle(ev.target.value)} />
      </label>

      <label>
        <span>Description</span>
        <input value={disc} onChange={(ev) => setDesc(ev.target.value)} />
      </label>
      <button>Add Todo</button>
    </form>
  );
}

export default CreateForm;
