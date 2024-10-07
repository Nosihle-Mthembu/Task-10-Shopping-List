import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../redux/shoppingListSlice';

const Items = ({ categoryName }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items[categoryName] || []);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    notes: ''
  });

  const handleAddItem = () => {
    if (newItem.name.trim() !== '') {
      dispatch(addItem({ categoryName, item: newItem }));
      setNewItem({ name: '', quantity: '', notes: '' });
    }
  };

  const handleDeleteItem = (index) => {
    dispatch(deleteItem({ categoryName, itemIndex: index }));
  };

  return (
    <div style={styles.container}>
      <h3>{categoryName} Items</h3>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item Name"
        style={styles.input}
      />
      <input
        type="text"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        placeholder="Quantity"
        style={styles.input}
      />
      <input
        type="text"
        value={newItem.notes}
        onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
        placeholder="Optional Notes"
        style={styles.input}
      />
      <button onClick={handleAddItem} style={styles.button}>Add Item</button>

      <ul style={styles.itemList}>
        {items.map((item, index) => (
          <li key={index} style={styles.item}>
            <span>{item.name} - {item.quantity}</span>
            <button onClick={() => handleDeleteItem(index)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '80%',
  },
  button: {
    padding: '8px',
    backgroundColor: '#5c92a1',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 0',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    padding: '5px',
  },
};

export default Items;
