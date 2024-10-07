// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCategory, addItem } from '../redux/shoppingListSlice';

// const Home = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.shoppingList.categories);
//   const items = useSelector((state) => state.shoppingList.items);
  
//   const [categoryName, setCategoryName] = useState('');
//   const [itemName, setItemName] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleAddCategory = (e) => {
//     e.preventDefault();
//     if (categoryName) {
//       dispatch(addCategory(categoryName));
//       setCategoryName('');
//     }
//   };

//   const handleAddItem = (e) => {
//     e.preventDefault();
//     if (itemName && selectedCategory) {
//       dispatch(addItem({ category: selectedCategory, item: itemName }));
//       setItemName('');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Category</h2>
//       <form onSubmit={handleAddCategory}>
//         <input 
//           type="text" 
//           value={categoryName} 
//           onChange={(e) => setCategoryName(e.target.value)} 
//           placeholder="Category Name" 
//         />
//         <button type="submit">Add Category</button>
//       </form>

//       <h2>Add Item</h2>
//       <form onSubmit={handleAddItem}>
//         <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select>
//         <input 
//           type="text" 
//           value={itemName} 
//           onChange={(e) => setItemName(e.target.value)} 
//           placeholder="Item Name" 
//         />
//         <button type="submit">Add Item</button>
//       </form>

//       <h2>Your Shopping List</h2>
//       {categories.map((category) => (
//         <div key={category}>
//           <h3>{category}</h3>
//           <ul>
//             {items[category]?.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;
