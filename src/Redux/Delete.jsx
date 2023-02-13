import React from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { deletetodorequest, deletettodofailure, deletettodosuccess } from './action';

export default function Delete({ id }) {
    const dispatch = useDispatch();
    const DeletePOST = () => {
    console.log(id);
    dispatch(deletetodorequest());
    axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
    dispatch(deletettodosuccess(res.data))
    }).catch(e => {
    dispatch(deletettodofailure())
    });
    };
  

  return (
    <div>
     <button onClick={() => DeletePOST(id)}>DELETE</button>
    </div>
  )
}
