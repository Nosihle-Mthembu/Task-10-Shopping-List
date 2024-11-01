import { createSlice } from '@reduxjs/toolkit';
import { saveItemOffline, getOfflineItems, clearOfflineData } from '../components/offlineDB';

const initialState = {
  categories: JSON.parse(localStorage.getItem('categories')) || [],
  lists: JSON.parse(localStorage.getItem('lists')) || [],
  offlineQueue: [], // To store items that need to be synced when back online
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

      // Save to offline queue if offline
      if (!navigator.onLine) {
        saveItemOffline({ category, item });
      } else {
        // If online, you can also add API logic here to save directly to the backend if needed
      }
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
    syncOfflineItems: (state, action) => {
      const itemsToSync = action.payload;
      itemsToSync.forEach((item) => {
        const { category, item: newItem } = item;
        const list = state.lists.find((list) => list.category === category);
        if (list) {
          list.items.push(newItem);
        } else {
          state.lists.push({ category, items: [newItem] });
        }
      });
      localStorage.setItem('lists', JSON.stringify(state.lists));
      clearOfflineData(); // Clear offline data after syncing
    },
  },
});

// Actions and Reducers
export const { addCategory, deleteCategory, updateCategory, addItem, updateItem, deleteItem, syncOfflineItems } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
