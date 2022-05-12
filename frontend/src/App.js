import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1 className="navbar-title">경태위키</h1>
        <ul className="navbar-items">
          <li className="navbar-item">인물</li>
          <li className="navbar-item">사건사고</li>
          <li className="navbar-item">프로젝트에 관해</li>
        </ul>
      </div>
      <div className="main">
        <div className="main-jumbotron">
          <h4 className="main-h4">
            지금, 경태에 대해서 더 알아볼 수 있는 기회
          </h4>
          <h2 className="main-h2">경태위키</h2>
        </div>
        <div className="list-item">
          <h4 className="list-item-title">기숙사 입소 첫 날의 경태</h4>
          <p className="list-item-p">조회수 101</p>
        </div>
        <div className="list-item">
          <h4 className="list-item-title">기숙사 입소 첫 날의 경태</h4>
          <p className="list-item-p">조회수 101</p>
        </div>
        <div className="list-item">
          <h4 className="list-item-title">기숙사 입소 첫 날의 경태</h4>
          <p className="list-item-p">조회수 101</p>
        </div>
      </div>
      <div className="footer">
        <ul className="footer-menu">
          <li>
            <a href="/">공지사항</a>
          </li>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">이용약관</a>
          </li>
          <li>
            <a href="/">자료 출처</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
