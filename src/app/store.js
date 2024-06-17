import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global/globalSlice";
import bookingReducer from "../features/booking/bookingSlice";
import { carsApi } from "../services/cars";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    booking: bookingReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});
