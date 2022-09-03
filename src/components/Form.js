import { useDispatch } from 'react-redux/es/exports';
import React, { useState } from 'react';
import { bookAddThunk } from '../redux/Books/Books';
import './style/Form.css';

function Form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAddThunk(state));
    setState({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChanges = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="form-section">
      <hr />
      <h1>ADD NEW BOOK</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={handle}
          value={state.title}
          className="inputbook"
          placeholder="Book"
        />
        <input
          name="author"
          type="text"
          onChange={handle}
          value={state.author}
          className="inputauthor"
          placeholder="Author"
        />
        <select className="category" value={state.category} name="category" onChange={handleChanges}>
          <option value="History">History</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
        </select>
        <button type="submit" className="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
