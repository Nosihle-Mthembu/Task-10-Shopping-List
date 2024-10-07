import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import shoppingListReducer from './shoppingListSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    shoppingList: shoppingListReducer,
  },
});

export default store;
