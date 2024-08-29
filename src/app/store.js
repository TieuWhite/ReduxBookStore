import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "../slice/bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
