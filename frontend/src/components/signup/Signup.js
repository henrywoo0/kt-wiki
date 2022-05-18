import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <form>
        <input
          className="signup-input"
          type="text"
          name="name"
          id="name"
          placeholder="이름 (정확한 이름을 입력해주세요)"
        />
        <input
          className="signup-input"
          type="text"
          name="id"
          id="id"
          placeholder="아이디"
        />
        <input
          className="signup-input"
          type="text"
          name="password"
          id="password"
          placeholder="패스워드"
        />
        <input type="submit" value="제출" className="signup-input-submit" />
      </form>
      <Link to="/login">
        <p className="signup-text">이미 계정이 있나요?</p>
      </Link>
    </div>
  );
}

export default Signup;
