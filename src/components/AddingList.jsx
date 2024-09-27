import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/shoppingListSlice';

function AddList() {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ name: listName }));
    setListName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={listName} 
        onChange={(e) => setListName(e.target.value)} 
        placeholder="New List" 
      />
      <button type="submit">Add List</button>
    </form>
  );
}

export default AddList;
