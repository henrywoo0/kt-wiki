import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">경태위키</h1>
      <ul className="navbar-items">
        <li className="navbar-item">인물</li>
        <li className="navbar-item">사건사고</li>
        <li className="navbar-item">프로젝트에 관해</li>
      </ul>
    </div>
  );
}

export default Navbar;
