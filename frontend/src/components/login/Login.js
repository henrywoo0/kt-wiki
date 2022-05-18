import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleInputId = (e) => {
    setId(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = async (e) => {
    e.preventDefault();
    try {
      const json = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/login`,
        {
          id: id,
          password: password,
        }
      );
      console.log(json.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLoginClick}>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="아이디"
          className="login-input"
          value={id}
          onChange={handleInputId}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="패스워드"
          className="login-input"
          value={password}
          onChange={handleInputPassword}
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
