import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global/globalSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    booking: bookingReducer,
  },
});
