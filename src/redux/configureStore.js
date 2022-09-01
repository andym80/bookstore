import { configureStore } from '@reduxjs/toolkit';
import booksReduxer from './Books/Books';
import categoryReducer from './Category/Category';

const store = configureStore({
  reducer: {
    books: booksReduxer,
    category: categoryReducer,
  },
});

export default store;
