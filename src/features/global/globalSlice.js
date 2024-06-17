import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "splash",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = globalSlice.actions;

export default globalSlice.reducer;
