import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../API/Service";
import image from "../../assets/otp.png";

function Otp__verify() {
  const history = useHistory();
  const [otp, setOtp] = useState();
  const handleOtp = (e) => {
    e.preventDefault();
    service_name.verifyOtp(Number(otp));
    history.push("/resetPassword");
  };
  const handleChangeOtp = (e, id) => {
    if (id == "otp") setOtp(e.target.value);
  };

  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>
      <div className="main__container">
        <div className="login__container">
          <h2>Enter your OTP</h2>
          <form className="admin__login" onSubmit={handleOtp}>
            <input
              type="number"
              placeholder="Enter your Otp"
              name="userOtp"
              onChange={(e) => handleChangeOtp(e, "otp")}
            ></input>

            <input type="submit" value="Verify" />
          </form>
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
