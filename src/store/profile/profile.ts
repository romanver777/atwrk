import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../users-list/types";

interface IProfileState {
  data: User | null;
  loading: boolean;
  error: string | null;
  modal: boolean;
}

const initialState: IProfileState = {
  data: null,
  loading: true,
  error: null,
  modal: false,
};

export const loadProfile = createAsyncThunk(
  "loadProfile",
  async (id: number, thunkApi) => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!resp.ok) return thunkApi.rejectWithValue("Что-то пошло не так...");

      return resp.json();
    } catch (err) {
      thunkApi.rejectWithValue("failed to load data");
    }
  }
);

export const profileSlice = createSlice({
  name: "load profile",
  initialState,
  reducers: {
    setData: (state, action) => {
      if (state.data != undefined) {
        for (const key of Object.keys(action.payload)) {
          switch (key) {
            case "city": {
              state.data.address.city = action.payload[key];
              break;
            }
            case "company": {
              state.data.company.name = action.payload[key];
              break;
            }
            default:
              state.data[key] = action.payload[key];
          }
        }
        state.modal = true;
      }
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const { setData, closeModal } = profileSlice.actions;
export default profileSlice.reducer;
