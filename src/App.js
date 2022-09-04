import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/BookForm';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Form from './components/Form';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    );
  }
}
