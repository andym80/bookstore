const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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
      return [
        ...state,
        {
          id: 1,
          title: action.title,
          author: 'action.author',
        },
      ];

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
