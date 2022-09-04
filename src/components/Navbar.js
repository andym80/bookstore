import { Link } from 'react-router-dom';
import './style/Navbar.css';
import image from './assets/user.png';

function Navbar() {
  return (
    <nav className="navmenu">
      <h1>Bokstore CMS</h1>
      <div className="link">
        <Link to="/">Books</Link>
        <Link to="/Category">Category</Link>
      </div>
      <div className="logo">
        <span className="logotype"><img src={image} alt="User" /></span>

      </div>
    </nav>
  );
}

export default Navbar;
