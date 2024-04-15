import { configureStore } from "@reduxjs/toolkit";
import users from "./users-list/users-list";

export const store = configureStore({
  reducer: {
    users,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
