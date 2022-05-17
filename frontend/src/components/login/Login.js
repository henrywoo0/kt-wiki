import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <input type="text" name="id" id="id" placeholder="아이디" />
        <input type="password" name="id" id="id" placeholder="패스워드" />
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default Login;
