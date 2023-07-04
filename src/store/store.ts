import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: { app: AppReducer, user: userReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
