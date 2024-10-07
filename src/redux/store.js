// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListSlice';
import { authReducer } from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        shoppingList: shoppingListReducer,
    },
});

export default store;

