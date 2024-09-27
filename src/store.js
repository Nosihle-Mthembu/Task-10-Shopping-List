import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/LogIn/LogInSlice'
import shoppingListReducer from './redux/shoppingListSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    shoppingList: shoppingListReducer,
  },
})