import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/studentL.png";
function StudentLogin() {
  return (
    <div className="container">
      <nav>
        <a href="../../../">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Student</h2>
          <form className="admin__login">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
            ></input>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            ></input>
          </form>
          <Link to="resetPassword">
            <a className="forgot" href="#">
              Forgot Password
            </a>
          </Link>
          <button className="btn__admin" type="submit" form="" value="submit">
            Log In
          </button>
          <span>
            New User? <a href="/student-sign">Sign In</a>
          </span>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
