import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  isLoading: true,
  user: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload.isAuthenticate;
      state.isLoading = action.payload.isLoading;
      state.user = action.payload.user;
    },
  },
});
export const { setIsAuthenticate } = authSlice.actions;
export default authSlice.reducer;
