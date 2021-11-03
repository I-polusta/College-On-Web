import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/create__pasword.png";
function Password__form() {
  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Create your Password</h2>
          <form className="admin__login">
            <label>New Password</label>
            <input type="password" placeholder="Password"></input>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password"></input>
            <input type="submit" value="Update Password" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Password__form;
