import React, { useState } from 'react';
import Categories from './CategoryList';
import Items from './ListView';


const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={styles.container}>
      <div style={styles.categoriesSection}>
        <Categories onCategoryClick={handleCategoryClick} />
      </div>
      <div style={styles.itemsSection}>
        {selectedCategory ? (
          <Items categoryName={selectedCategory} />
        ) : (
          <p>Select a category to view and add items</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  categoriesSection: {
    flex: 1,
    marginRight: '20px',
  },
  itemsSection: {
    flex: 2,
  },
};

export default ShoppingList;
