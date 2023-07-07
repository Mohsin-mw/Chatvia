import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    users: {},
  },
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { toggleLoading, setUsers } = app.actions;
export default app.reducer;
