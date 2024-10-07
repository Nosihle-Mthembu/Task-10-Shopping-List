import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: {
        categories: [],
        items: [],
    },
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
    },
});

export const { addCategory, addItem, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
