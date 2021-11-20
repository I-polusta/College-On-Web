import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logotbg.png";
import "./LoginNavbar.css";

function LoginNavbar() {
  return (
    <div>
      <nav className="login__sidebar__nav">
        <div className="main__nav__container">
          <img src={logo} alt="main logo" />
          <div className="btn__container__nav">
            <Link to="/student-login">
              <button className="nav__btn__1">Student</button>
            </Link>
            <Link to="/faculty-login">
              <button className="nav__btn__2">Teacher</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LoginNavbar;
