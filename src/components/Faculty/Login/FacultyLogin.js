import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/facultyL.png";
function FacultyLogin() {
  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Faculty</h2>
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
            <Link to="resetPassword">
              <a className="forgot" href="#">
                Forgot Password
              </a>
            </Link>
            <input type="submit" value="Log In" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default FacultyLogin;
