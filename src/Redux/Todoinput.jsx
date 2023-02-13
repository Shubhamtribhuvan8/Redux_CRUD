import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodofailure, addtodorequest, addtodosuccess } from "./action";
import Delete from "./Delete";
import { useSelector } from "react-redux";
import Item from "./Item";
export default function Todoinput() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [title, setTitle] = useState("");
  const handlechange = (e) => {
    setTitle(e.target.value);
  };
  const handleAdd = () => {
    const payload = {
      title,
      status: false,
    };
    dispatch(addtodorequest());
    axios
      .post(`http://localhost:8080/todos`, payload)
      .then((res) => {
        dispatch(addtodosuccess(res.data));
      })
      .catch((e) => {
        dispatch(addtodofailure());
      });
  };
  return (
    <div>
      <input value={title} onChange={handlechange} />
      <button onClick={handleAdd}>Add Todo</button>
      <Item/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Delete id={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
