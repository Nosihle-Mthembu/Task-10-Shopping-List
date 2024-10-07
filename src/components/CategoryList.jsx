import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/shoppingListSlice';

const Categories = ({ onCategoryClick }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shoppingList.categories);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      dispatch(addCategory(newCategory.trim()));
      setNewCategory('');
    }
  };

  return (
    <div style={styles.container}>
      <h3>Categories</h3>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Add a new category"
        style={styles.input}
      />
      <button onClick={handleAddCategory} style={styles.button}>Add Category</button>

      <ul style={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategoryClick(category)} style={styles.categoryItem}>
            {category}
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
  categoryList: {
    listStyleType: 'none',
    padding: 0,
  },
  categoryItem: {
    cursor: 'pointer',
    margin: '5px 0',
  },
};

export default Categories;
