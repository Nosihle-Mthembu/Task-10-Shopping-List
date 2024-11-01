import React, { useState, memo } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { addCategory, deleteCategory, updateCategory } from '../redux/shoppingListSlice';

const Categories = memo(({ onCategoryClick }) => {  
  const dispatch = useDispatch();  
  const categories = useSelector((state) => state.shoppingList.categories);  
  const [newCategory, setNewCategory] = useState('');  
  const [showForm, setShowForm] = useState(false);  
  const [editingIndex, setEditingIndex] = useState(null);  
  const [editingName, setEditingName] = useState('');  
  const [searchTerm, setSearchTerm] = useState(''); // New state for search

  const handleAddCategory = () => {  
    if (newCategory.trim() !== '') {  
      try {  
        dispatch(addCategory(newCategory.trim()));  
        setNewCategory('');  
        setShowForm(false);  
      } catch (error) {  
        console.error(error);  
      }  
    }  
  };  
  
  const handleDeleteCategory = (index) => {  
    try {  
      dispatch(deleteCategory(index));  
    } catch (error) {  
      console.error(error);  
    }  
  };  
  
  const handleEditCategory = (index) => {  
    setEditingIndex(index);  
    setEditingName(categories[index]);  
  };  
  
  const handleUpdateCategory = () => {  
    try {  
      dispatch(updateCategory({ index: editingIndex, newName: editingName }));  
      setEditingIndex(null);  
      setEditingName('');  
    } catch (error) {  
      console.error(error);  
    }  
  };  
  
  // Filtered categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (  
    <div style={styles.container}>  
      <h3>Categories</h3>  
      <input  
        type="text"  
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}  
        placeholder="Search categories..."  
        style={styles.searchInput}  
      />
      <button onClick={() => setShowForm(!showForm)} style={styles.button}>  
        {showForm ? 'Close Form' : 'Add Category'}  
      </button>  
      {showForm && (  
        <div>  
          <input  
            type="text"  
            value={newCategory}  
            onChange={(e) => setNewCategory(e.target.value)}  
            placeholder="Add a new category"  
            style={styles.input}  
          />  
          <button onClick={handleAddCategory} style={styles.button}>  
            Add Category  
          </button>  
        </div>  
      )}  
      <div style={styles.categoryList}>  
        {filteredCategories.map((category, index) => (  
          <div key={index} style={styles.categoryCard}>  
            {editingIndex === index ? (  
              <>  
                <input  
                  type="text"  
                  value={editingName}  
                  onChange={(e) => setEditingName(e.target.value)}  
                  style={styles.editInput}  
                />  
                <button onClick={handleUpdateCategory} style={styles.saveButton}>  
                  Save  
                </button>  
                <button onClick={() => setEditingIndex(null)} style={styles.cancelButton}>  
                  Cancel  
                </button>  
              </>  
            ) : (  
              <>  
                <span onClick={() => onCategoryClick(category)} style={styles.categoryItem}>  
                  {category}  
                </span>  
                <button onClick={() => handleEditCategory(index)} style={styles.editButton}>  
                  Edit  
                </button>  
                <button onClick={() => handleDeleteCategory(index)} style={styles.deleteButton}>  
                  Delete  
                </button>  
              </>  
            )}  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
});

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    display: 'flex',               
    flexDirection: 'column',       
    alignItems: 'center',          
    justifyContent: 'center',      
    width: '100%',                 
    maxWidth: '500px',             
    margin: '0 auto',              
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '80%',
  },
  searchInput: {
    marginBottom: '10px',
    padding: '8px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px',
    backgroundColor: '#5c92a1',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  categoryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',               // Full width for category list
  },
  categoryCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '10px 15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  categoryItem: {
    cursor: 'pointer',
    flex: 1,
  },
  editButton: {
    padding: '6px',
    backgroundColor: '#ffd966',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginLeft: '10px',
  },
  deleteButton: {
    padding: '6px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginLeft: '5px',
  },
  editInput: {
    padding: '8px',
    width: '60%',
    marginRight: '10px',
  },
  saveButton: {
    padding: '6px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginRight: '5px',
  },
  cancelButton: {
    padding: '6px',
    backgroundColor: '#ccc',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Categories;
