import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: []
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = {
        id: Date.now(),
        name: action.payload.name,
        items: []
      };
      state.categories.push(newCategory);
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        category => category.id !== action.payload
      );
    },
    addItem: (state, action) => {
      const category = state.categories.find(
        category => category.id === action.payload.categoryId
      );
      const newItem = {
        id: Date.now(),
        name: action.payload.name,
        quantity: action.payload.quantity || 1
      };
      category.items.push(newItem);
    },
    deleteItem: (state, action) => {
      state.categories.forEach(category => {
        category.items = category.items.filter(
          item => item.id !== action.payload
        );
      });
    },
    // Add the updateCategory reducer
    updateCategory: (state, action) => {
      const category = state.categories.find(
        category => category.id === action.payload.id
      );
      if (category) {
        category.name = action.payload.name;
      }
    },
    updateItem: (state, action) => {
      state.categories.forEach(category => {
        const item = category.items.find(item => item.id === action.payload.id);
        if (item) {
          item.name = action.payload.name;
        }
      });
    }
  }
});

export const {
  addCategory,
  deleteCategory,
  addItem,
  deleteItem,
  updateCategory,  // Make sure to export the updateCategory action
  updateItem
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
