import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navmenu">
      <h1>Bokstore CMS</h1>
      <div className="link">
        <Link to="/">Books</Link>
        <Link to="/Category">Category</Link>
      </div>
      <div className="logo">
        <span className="logotipe">Logo</span>
      </div>
    </nav>
  );
}

export default Navbar;
