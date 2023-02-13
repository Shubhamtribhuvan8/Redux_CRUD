import React, { useState, useEffect } from "react";
import axios from "axios";

function PostRequest() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/todos")
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handlePost = () => {
    const data = {
      title: "new todo",
      completed: false
    };

    axios
      .post("http://localhost:8080/todos", data)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleGet = () => {
    fetchData();
  };

  const handlePatch = id => {
    const data = {
      completed: true
    };
    axios
      .patch(`http://localhost:8080/todos/${id}`, data)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handlePut = id => {
    const data = {
      title: "Title ko chnage kar diya put request se",
      completed: false
    };

    axios
      .put(`http://localhost:8080/todos/${id}`, data)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handlePost}>Post</button>
      <button onClick={handleGet}>Get</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handlePatch(todo.id)}>Patch</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handlePut(todo.id)}>Put</button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default PostRequest;
