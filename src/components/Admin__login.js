import React from "react";
import image from "../assets/admin__login.png";
import "./Admin__login.css";
function Admin__login() {
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Admin</h2>
          <form>
            <input type="email" placeholder="Email Address"></input>
            <input type="password" placeholder="Password"></input>
          </form>
          <a href="#">Forgot Password</a>
          <button type="submit" form="" value="submit">
            Log In
          </button>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Admin__login;
