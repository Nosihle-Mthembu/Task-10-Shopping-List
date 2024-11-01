import React, { useState } from 'react';  
import ListView from './ListView';  
import Categories from './Categories';  

const ParentComponent = () => {  
  const [selectedCategory, setSelectedCategory] = useState(null);  

  const handleCategoryClick = (category) => {  
    setSelectedCategory(category);  
  };  

  const handleCloseList = () => {  
    setSelectedCategory(null); // Reset the state without reloading  
  };  

  return (  
    <div>  
      <Categories onCategoryClick={handleCategoryClick} />  
      {selectedCategory && (  
        <ListView categoryName={selectedCategory} onClose={handleCloseList} />  
      )}  
    </div>  
  );  
};  

export default ParentComponent;  
