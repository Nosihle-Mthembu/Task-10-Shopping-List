import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../redux/shoppingListSlice';

const ListView = memo(({ categoryName, onClose }) => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({ name: '', quantity: '', notes: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({ name: '', quantity: '', notes: '' });
  const items = useSelector((state) =>
    state.shoppingList.lists.find((list) => list.category === categoryName)?.items || []
  );

  const handleAddItem = () => {
    if (newItem.name.trim()) {
      try {
        dispatch(addItem({ category: categoryName, item: { ...newItem } }));
        setNewItem({ name: '', quantity: '', notes: '' });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setEditedItem(items[index]);
  };

  const handleSaveItem = () => {
    if (editedItem.name.trim()) {
      try {
        dispatch(updateItem({ category: categoryName, itemIndex: editingIndex, newItem: editedItem }));
        setEditingIndex(null);
        setEditedItem({ name: '', quantity: '', notes: '' });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteItem = (index) => {
    try {
      dispatch(deleteItem({ category: categoryName, itemIndex: index }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div style={styles.header}>
        <h3>Items in {categoryName}</h3>
        <button onClick={onClose} style={styles.closeButton}>Close List</button>
      </div>
      <ul style={styles.itemList}>
        {items.map((item, index) => (
          <li key={index} style={styles.itemCard}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedItem.name}
                  onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                  placeholder="Name"
                  style={styles.input}
                />
                <input
                  type="text"
                  value={editedItem.quantity}
                  onChange={(e) => setEditedItem({ ...editedItem, quantity: e.target.value })}
                  placeholder="Quantity"
                  style={styles.input}
                />
                <input
                  type="text"
                  value={editedItem.notes}
                  onChange={(e) => setEditedItem({ ...editedItem, notes: e.target.value })}
                  placeholder="Notes (optional)"
                  style={styles.input}
                />
                <button onClick={handleSaveItem} style={styles.saveButton}>Save</button>
              </>
            ) : (
              <>
                <span style={styles.itemText}><strong>{item.name}</strong> - {item.quantity}</span>
                <p style={styles.notesText}>{item.notes}</p>
                <button onClick={() => handleEditItem(index)} style={styles.editButton}>Edit</button>
                <button onClick={() => handleDeleteItem(index)} style={styles.deleteButton}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div style={styles.addItemContainer}>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Name"
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
          placeholder="Notes (optional)"
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.addButton}>Add Item</button>
      </div>
    </div>
  );
});

const styles = {
  notesText: { fontStyle: 'italic', color: '#777' },
  

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    padding: '5px 10px',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
  },
  itemCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    marginBottom: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  itemText: {
    flex: 1,
  },
  editButton: {
    padding: '5px',
    backgroundColor: '#5bc0de',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
    marginLeft: '5px',
  },
  deleteButton: {
    padding: '5px',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
    marginLeft: '5px',
  },
  saveButton: {
    padding: '5px',
    backgroundColor: '#5cb85c',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
    marginLeft: '5px',
  },
  addItemContainer: {
    display: 'flex',
    marginTop: '10px',
   flexDirection: 'column', 
   gap: '5px',
  },
  input: {
    padding: '8px',
    flex: 1,
    marginRight: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  addButton: {
    padding: '8px',
    backgroundColor: '#5c92a1',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default ListView;
