import React, { useState } from "react";
import { useHistory } from "react-router";
import admin__service from "../../../API/admin__service";
import image from "../../../assets/otp.png";

function Admin_otp() {
  const history = useHistory();
  const [otp, setOtp] = useState();
  const userOtp = parseInt(otp, 10);
  const OTP = {
    userOtp,
  };
  const handleOtp = async (e) => {
    e.preventDefault();

    await admin__service
      .verifyOtpAdmin(OTP)
      .then((response) => {
        console.log(response);
        if (response.data === true) {
          console.log(response);
          history.push("/resetpassword-admin");
        } else if (response.data === false) {
          console.log(typeof OTP);
          console.log(typeof userOtp);
          window.alert("wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChangeOtp = (e, id) => {
    if (id == "otp") Number(setOtp(e.target.value));
  };

  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>
      <div className="main__container">
        <div className="login__container">
          <h1>Enter your OTP</h1>
          <form className="admin__login" onSubmit={handleOtp}>
            <input
              type="number"
              placeholder="Enter your Otp"
              name="userOtp"
              onChange={(e) => Number(handleChangeOtp(e, "otp"))}
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

export default Admin_otp;
