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

export const addBookThunk = createAsyncThunk(ADD_BOOK, async (
  { title, author, category },
  thunkAPI,
) => {
  const book = {
    item_id: uniqid(),
    title,
    author,
    category,
  };
  await axios.post(`${URL}/${apiId}/books`, book)
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
  name: 'bookstore-react-app/books',
  initialState: [],
  extraReducers: {
    [booksLoadThunk.fulfilled]: (state, action) => action.payload,
    [addBookThunk.fulfilled]: (state, action) => action.payload,
    [deleteBookThunk.fulfilled]: (state, action) => action.payload,
  },
});

export const booksList = (state) => state.bookList;
export default storeSlice.reducer;
