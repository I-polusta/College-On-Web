import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/admin__login.png";
import "./loginform.css";

function Admin__loginform() {
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Admin</h2>
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
          <a className="forgot" href="#">
            Forgot Password
          </a>
          <Link to="/admin-dashboard">
            <button className="btn__admin" type="submit" form="" value="submit">
              Log In
            </button>
          </Link>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Admin__loginform;
