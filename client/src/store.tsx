import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchReducer from "./search/searchSlice";
import { searchApi } from "./search/searchApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(searchApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
