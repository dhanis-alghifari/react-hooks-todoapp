import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const onFocus = useRef(null)

  useEffect(() => {
      onFocus.current.focus()
  })

  const _handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const _handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form action="" className="todo-form" onSubmit={_handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={_handleChange}
        ref={onFocus}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
