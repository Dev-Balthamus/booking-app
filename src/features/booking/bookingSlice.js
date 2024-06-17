import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idCarToBooking: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.idCarToBooking = action.payload;
    },
  },
});

export const { setId } = bookingSlice.actions;

export default bookingSlice.reducer;
