import { configureStore } from "@reduxjs/toolkit";
import users from "./users-list/users-list";
import profile from "./profile/profile";

export const store = configureStore({
  reducer: {
    users,
    profile,
  },
  devTools: false,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
