import { createSlice } from "@reduxjs/toolkit";

const initState = {
  books: [],
  loading: false,
  error: null,
  pageNum: 1,
  query: "",
};

const bookSlice = createSlice({
  name: "books",
  initState,
  reducers: {
    fetchBooksRequest(state) {
      state.loading = true;
    },
    fetchBooksSuccess(state, action) {
      state.books = action.payload;
      state.loading = false;
    },
    fetchBooksError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setPageNum(state, action) {
      state.pageNum = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  setPageNum,
  setQuery,
} = bookSlice.actions;

export default bookSlice.reducer;
