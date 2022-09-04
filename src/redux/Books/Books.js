/* eslint-disable no-console */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOAD_BOOKS = 'LOAD_BOOKS';

const apiId = 'e5d11690-a112-4151-a540-bba474219f64';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiId}/books`;

export const booksLoadThunk = createAsyncThunk(LOAD_BOOKS, async () => {
  const response = await axios.get(`${URL}/${apiId}/books`).catch((err) => {
    console.log('Error', err);
  });
  const call = response.data;
  const setData = Object.keys(call).map((key) => ({
    id: key,
    ...call[key][0],
  }));

  return setData;
});

export const bookAddThunk = createAsyncThunk(ADD_BOOK, async (
  { title, author, category },
  thunkAPI,
) => {
  const book = {
    item_id: uniqid(),
    title,
    category,
    author,
  };
  await axios.post(`${URL}/${apiId}/books `, book)
    .then(() => thunkAPI.dispatch(booksLoadThunk()))
    .catch((err) => { console.log('Error', err); });

  const books = thunkAPI.getState().booksList;
  return books;
});

export const deleteBookThunk = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  await axios.delete(`${URL}/${apiId}/books/${id}`)
    .then(() => thunkAPI.dispatch(booksLoadThunk()))
    .catch((err) => { console.log('Error', err); });
  const books = thunkAPI.getState().booksList;
  return books;
});

const storeSlice = createSlice({
  name: 'bookstore/books',
  initialState: [],
  reducers: {},
  extraReducers: {
    [booksLoadThunk.fulfilled]: (state, action) => action.payload,
    [bookAddThunk.fulfilled]: (state, action) => action.payload,
    [deleteBookThunk.fulfilled]: (state, action) => action.payload,
  },
});

export default storeSlice.reducer;
export const booklist = (state) => state.booksList;

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Author1',
    id: 1,
  },

  {
    title: 'Dune',
    author: 'Author2',
    id: 2,
  },
];

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
    { return [...state, action.payload]; }

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (titleBook, authorBook, idBook) => {
  const Book = {
    type: ADD_BOOK,
    title: titleBook,
    author: authorBook,
    id: idBook,
  };
  return Book;
};

export const removeBook = (bookId) => {
  const removedBook = {
    type: REMOVE_BOOK,
    id: bookId,
  };
  return removedBook;
};
