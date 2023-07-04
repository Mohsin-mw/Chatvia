import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface UserState {
  user: User | null;
}

const storedUserString = localStorage.getItem("user");
const storedUser: User | null = storedUserString
  ? JSON.parse(storedUserString)
  : null;

const initialState: UserState = {
  user: storedUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      const userString = JSON.stringify(action.payload);
      localStorage.setItem("user", userString);
      state.user = action.payload;
    },
    clearUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
