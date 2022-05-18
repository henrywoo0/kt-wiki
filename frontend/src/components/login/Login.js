import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="아이디"
          className="login-input"
        />
        <input
          type="password"
          name="id"
          id="id"
          placeholder="패스워드"
          className="login-input"
        />
        <input type="submit" value="제출" className="login-input-submit" />
      </form>
      <Link to="/signup">
        <p className="login-text">아직 계정이 없으신가요?</p>
      </Link>
    </div>
  );
}

export default Login;
