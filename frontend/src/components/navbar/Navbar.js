import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <a href="/">경태위키</a>
      </h1>
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link to="/category/2" className="navbar-item-link">
            인물
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/1" className="navbar-item-link">
            사건사고
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about-project" className="navbar-item-link">
            프로젝트에 관해
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-item-link">
            로그인
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
