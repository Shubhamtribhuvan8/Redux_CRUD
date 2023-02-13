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

const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

const minus = (payload) => {
  return {
    type: REDUCE,
    payload,
  };
};

const todorequest = (payload) => {
  return {
    type: TODO_REQUEST,
    payload,
  };
};
const todosuccess = (data) => {
  return {
    type: TODO_SUCCESS,
    payload: data,
  };
};
const todofailure = (payload) => {
  return {
    type: TODO_FAILURE,
    payload,
  };
};
//post
const addtodorequest = (payload) => {
  return {
    type: ADD_TODO_REQUEST,
    payload,
  };
};
const addtodosuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};
const addtodofailure = (payload) => {
  return {
    type: ADD_TODO_FAILURE,
    payload,
  };
};

//delete
const deletetodorequest = (payload) => {
    return {
      type: DELETE_TODO_REQUEST,
      payload,
    };
  };
  const deletettodosuccess = (id) => {
    return {
      type: DELETE_TODO_SUCCESS,
      payload: id,
    };
  };
  const deletettodofailure = (payload) => {
    return {
      type: DELETE_TODO_FAILURE,
      payload,
    };
  };
  export const deleteItem = (itemId) => {
    return {
      type: DELETE_ITEM,
      payload: itemId
    };
  };
  

export {
  add,
  minus,
  todorequest,
  todofailure,
  todosuccess,
  addtodofailure,
  addtodorequest,
  addtodosuccess,
  deletetodorequest,
  deletettodosuccess,
  deletettodofailure,
};
