import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
      <div className="loginLeft">
          <p className="loginLogo">facebook</p>
          <p className="descrip">
          Facebook helps you connect and share with the people in your life.
          </p>
          
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <hr/>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
