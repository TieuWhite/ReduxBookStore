import { createSlice } from "@reduxjs/toolkit";

const initState = {
  books: [],
  book: {},
  loading: false,
  error: null,
  pageNum: 1,
  query: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState: initState,
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
    setBook(state, action) {
      state.book = action.payload;
    },
    setBooks(state, action) {
      state.books = action.payload;
    },
    setPageNum(state, action) {
      state.pageNum = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  setPageNum,
  setQuery,
  setBook,
  setLoading,
  setBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
