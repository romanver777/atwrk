import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import type { User } from "./types";

type Archived = {
  archived?: boolean;
};
type NewUser = User & Archived;

interface IUsersState {
  active: NewUser[];
  archived: NewUser[];
  loading: boolean;
  error: string | null;
}

const initialState: IUsersState = {
  active: [],
  archived: [],
  loading: true,
  error: null,
};

export const loadUsers = createAsyncThunk("loadUsers", async (_, thunkApi) => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resp.ok) return thunkApi.rejectWithValue("Что-то пошло не так...");

    return resp.json();
  } catch (err) {
    thunkApi.rejectWithValue("failed to load data");
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<number>) => {
      const card = state.archived.find((item) => item.id === action.payload);

      if (card) {
        card.archived = false;
        state.active.unshift(card);
        state.archived = state.archived.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    setArchived: (state, action: PayloadAction<number>) => {
      const card = state.active.find((item) => item.id === action.payload);

      if (card) {
        card.archived = true;
        state.archived.unshift(card);
        state.active = state.active.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.active = state.active.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = false;

        state.active = action.payload.filter(
          (item: User) =>
            !Object.prototype.hasOwnProperty.call(item, "archived")
        );

        state.archived = action.payload.filter((item: User) =>
          Object.prototype.hasOwnProperty.call(item, "archived")
        );
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const { setActive, setArchived, removeItem } = usersSlice.actions;
export default usersSlice.reducer;
