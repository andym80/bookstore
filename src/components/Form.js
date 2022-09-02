import { useDispatch } from 'react-redux';
import React, { useRef } from 'react';
import uniqid from 'uniqid';
import { addBook } from '../redux/Books/Books';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

    <div className="formtitle">
      <h2 className="newbook">Add new book</h2>
    </div>;

    return (
      <form className="form">
        <input ref={title} type="text" className="inputbook" placeholder="Book" required />
        <input ref={author} type="text" className="inputauthor" placeholder="Author" required />
        <button type="button" className="submit" onClick={() => dispatch(addBook(title.current.value, author.current.value, uniqid()))}>Submit</button>
      </form>
    );
};

export default Form;
