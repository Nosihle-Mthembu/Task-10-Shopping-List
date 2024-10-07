import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/shoppingListSlice';

const ShoppingList = () => {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemName) {
      dispatch(addItem({ id: Date.now(), name: itemName }));
      setItemName('');
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Add item..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
