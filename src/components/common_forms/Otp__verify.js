import React from "react";
import image from "../../assets/otp.png";

function Otp__verify() {
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>
      <div className="main__container">
        <div className="login__container">
          <h2>Enter your OTP</h2>
          <form className="admin__login">
            <input type="email" placeholder="Email Address"></input>
          </form>
          <button className="btn__admin" type="submit" form="" value="submit">
            verify
          </button>
          <a className="otp__resend" href="#" disabled="disabled">
            Resend OTP after 30secs
          </a>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Otp__verify;
