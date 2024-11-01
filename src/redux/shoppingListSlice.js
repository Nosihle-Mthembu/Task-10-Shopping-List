// shoppingListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: JSON.parse(localStorage.getItem('categories')) || [],
  lists: JSON.parse(localStorage.getItem('lists')) || [],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
    deleteCategory: (state, action) => {
      state.categories.splice(action.payload, 1);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
    updateCategory: (state, action) => {
      const { index, newName } = action.payload;
      if (state.categories[index]) {
        state.categories[index] = newName;
      }
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
    addItem: (state, action) => {
      const { category, item } = action.payload;
      const list = state.lists.find((list) => list.category === category);
      if (list) {
        list.items.push(item);
      } else {
        state.lists.push({ category, items: [item] });
      }
      localStorage.setItem('lists', JSON.stringify(state.lists));
    },
    updateItem: (state, action) => {
      const { category, itemIndex, newItem } = action.payload;
      const list = state.lists.find((list) => list.category === category);
      if (list) {
        list.items[itemIndex] = newItem;
      }
      localStorage.setItem('lists', JSON.stringify(state.lists));
    },
    deleteItem: (state, action) => {
      const { category, itemIndex } = action.payload;
      const list = state.lists.find((list) => list.category === category);
      if (list) {
        list.items.splice(itemIndex, 1);
      }
      localStorage.setItem('lists', JSON.stringify(state.lists));
    },
  },
});

export const { addCategory, deleteCategory, updateCategory, addItem, updateItem, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
