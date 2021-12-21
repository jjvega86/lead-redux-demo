import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/character/characterSlice";
import { swapiApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    character: characterReducer,
    [swapiApi.reducerPath]: swapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapiApi.middleware),
});
