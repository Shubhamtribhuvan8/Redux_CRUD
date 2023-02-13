import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from './action'

const Item = ({ itemId, name }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
