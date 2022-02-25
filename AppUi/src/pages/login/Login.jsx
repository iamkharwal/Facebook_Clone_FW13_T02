/** @format */

import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              className="loginInput margin-def"
              type="email"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              className="loginInput margin-def"
              type="password"
              minLength={4}
              ref={password}
              required
            />
            <button className="loginButton margin-def" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <hr/>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
