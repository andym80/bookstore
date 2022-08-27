import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Books from './components/BookForm';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
