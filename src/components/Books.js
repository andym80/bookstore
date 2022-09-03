import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
import { booksLoadThunk, deleteBookThunk } from '../redux/Books/Books';
import './style/Books.css';

function Book() {
  const bookList = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksLoadThunk());
  }, []);

  const handle = (e) => {
    dispatch(deleteBookThunk(e.target.id));
  };

  return (bookList.map((book) => (
    <div key={book.id} className="container">
      <div className="infocard">
        <span className="action">{book.category}</span>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <ul>
          <button type="button">Comments</button>
          <button type="button" id={book.id} onClick={handle}>Remove</button>
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="porcentage">
        <div className="progress">
          <Progressbar
            input={70}
            pathWidth={5}
            pathColor="#0290ff"
            trailWidth={5}
            trailColor="#e4e4e4"
            textStyle={{ fill: '#0290ff' }}
          />
        </div>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h5>Chapter 17</h5>
        <button type="submit" className="update">UPDATE PROGRESS</button>
      </div>
    </div>
  )));
}

export default Book;
