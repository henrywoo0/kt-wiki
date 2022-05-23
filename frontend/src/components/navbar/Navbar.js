import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [userName, setUserName] = useState();

  const getUserName = () => {
    setUserName(localStorage.getItem("userName"));
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <a href="/">경태위키</a>
      </h1>
      <ul className="navbar-items">
        <Link to="/category/2" className="navbar-item">
          <li>인물</li>
        </Link>
        <Link to="/category/1" className="navbar-item">
          <li>사건사고</li>
        </Link>
        <Link to="/about-project" className="navbar-item">
          <li>프로젝트에 관해</li>
        </Link>
        <Link to={userName ? "/mypage" : "/login"} className="navbar-item">
          <li>{userName || "로그인"}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
