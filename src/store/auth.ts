import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
