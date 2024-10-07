import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    categories: [],
    items: {}, // Structure: { categoryId: [items] }
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
      state.items[action.payload] = []; // Initialize empty array for new category
    },
    addItem: (state, action) => {
      const { category, item } = action.payload;
      if (state.items[category]) {
        state.items[category].push(item);
      }
    },
  },
});

export const { addCategory, addItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
