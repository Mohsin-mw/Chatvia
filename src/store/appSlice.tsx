import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    user: "mmw",
  },
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleLoading } = app.actions;
export default app.reducer;
