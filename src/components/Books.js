import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Books';
import Progressbar from 'react-js-progressbar';
import { booksLoadThunk, deleteBookThunk } from '../redux/Books/Books';
import './style/Books.css';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (books.map((book) => (
    <div key={book.id} className="container">
      <div className="infocard">
        <span>Action</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <ul>
          <button type="button">Comments |</button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeBook(book.id));
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="percentage">
        <h4>60%</h4>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h4>Chapter 17</h4>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>
    </div>

  )));
};

export default Book;
