/** @format */

import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const Navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        Navigate("login");
      } catch (error) {
        console.log(error);
      }
    }
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
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              type="email"
              placeholder="Email"
              ref={email}
              className="loginInput"
              required
            />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
              minLength={4}
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              type="password"
              required
            />
            <button className="loginButton">Sign Up</button>
            <Link to="/login" style={{ textAlign: "center" }}>
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
