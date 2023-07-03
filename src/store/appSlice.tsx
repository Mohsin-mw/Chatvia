import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    user: {
      name: "Emily Selman",
      email: "emily.selman@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleLoading } = app.actions;
export default app.reducer;
