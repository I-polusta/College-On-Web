import React from "react";
import image from "../assets/admin__login.png";
import "./loginform.css";

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

function Admin__loginform() {
  function validate(e) {
    console.log(e);
  }
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Admin</h2>
          <form className="admin__login">
            <input type="email" placeholder="Email Address" id="email"></input>
            <span id="emailerror" className="validation-error">
              {" "}
            </span>
            <input type="password" placeholder="Password" id="password"></input>
            <span id="passworderror" className="validation-error">
              {" "}
            </span>
          </form>
          <a className="forgot" href="#">
            Forgot Password
          </a>
          <button className="btn__admin" type="submit" form="" value="submit">
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

export default Admin__loginform;
