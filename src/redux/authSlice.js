import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    signup(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
