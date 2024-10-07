import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call for signup
export const signup = createAsyncThunk('auth/signup', async (userData) => {
  // Here you would typically call your API for sign-up
  // For now, we'll just simulate success
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, user: userData });
    }, 1000);
  });
});

// Simulate an API call for login
export const login = createAsyncThunk('auth/login', async (userData) => {
  // Here you would typically call your API for login
  // For now, we'll just simulate success
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, user: userData });
    }, 1000);
  });
});

// Create authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the actions and reducer
export const authReducer = authSlice.reducer;
