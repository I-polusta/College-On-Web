import React from "react";
import image from "../assets/email__verify.png";
function Email__verify() {
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>
      <div className="main__container">
        <div className="login__container">
          <h2>Enter your Email Id</h2>
          <form className="admin__login">
            <input type="email" placeholder="Email Address"></input>
          </form>
          <button className="btn__admin" type="submit" form="" value="submit">
            verify
          </button>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Email__verify;
