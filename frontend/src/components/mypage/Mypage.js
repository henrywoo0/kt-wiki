import { useNavigate } from "react-router-dom";
import "./Mypage.css";

function Mypage() {
  const navigate = useNavigate();

  const getUserName = () => {
    const userId = localStorage.getItem("userName");
    if (userId === undefined || userId === null) {
      navigate("/login");
    }
    return userId;
  };

  return (
    <div className="mypage">
      <h2>{getUserName()}님 환영합니다 😀</h2>
    </div>
  );
}

export default Mypage;
