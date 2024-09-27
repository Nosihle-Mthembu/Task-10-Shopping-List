import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/shoppingLists';

// Fetch all lists
export const fetchLists = createAsyncThunk('shoppingList/fetchLists', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Add a new list
export const addList = createAsyncThunk('shoppingList/addList', async (newList) => {
  const response = await axios.post(API_URL, newList);
  return response.data;
});

// Update list
export const updateList = createAsyncThunk('shoppingList/updateList', async (updatedList) => {
  const response = await axios.put(`${API_URL}/${updatedList.id}`, updatedList);
  return response.data;
});

// Delete list
export const deleteList = createAsyncThunk('shoppingList/deleteList', async (listId) => {
  await axios.delete(`${API_URL}/${listId}`);
  return listId;
});

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    lists: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.lists = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addList.fulfilled, (state, action) => {
        state.lists.push(action.payload);
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.lists = state.lists.filter((list) => list.id !== action.payload);
      })
      .addCase(updateList.fulfilled, (state, action) => {
        const index = state.lists.findIndex((list) => list.id === action.payload.id);
        state.lists[index] = action.payload;
      });
  },
});

export default shoppingListSlice.reducer;
