// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["CARS"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => `cars`,
      providesTags: ["CARS"],
    }),
    createCar: builder.mutation({
      query: ({ id, name, price, image }) => ({
        url: `cars`,
        method: "POST",
        body: {
          id,
          name,
          price,
          image,
        },
      }),
      invalidatesTags: ["CARS"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarsQuery, useCreateCarMutation } = carsApi;
