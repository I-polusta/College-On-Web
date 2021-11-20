import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../../API/AuthService";
import image from "../../../assets/otp.png";
import LoginNavbar from "../../navbar/Auth__pages/LoginNavbar";

function OTP_FAC() {
  const history = useHistory();
  const [otp, setOtp] = useState();
  const userOtp = parseInt(otp, 10);
  let object = {
    userOtp: userOtp,
    username: history.location.state.username,
  };
  const handleOtp = async (e) => {
    e.preventDefault();

    await service_name
      .verifyfacultyOtp(object)
      .then((response) => {
        console.log(response);
        if (response.data === true) {
          history.push({
            pathname: "/resetpassword-fac",
            state: object,
          });
        } else if (response.data === false) {
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

  let studentU = {
    username: history.location.state.username,
  };
  const handleresend = async (e) => {
    e.preventDefault();
    await service_name
      .verifyEmail(studentU)
      .then((response) => {
        console.log(response);
        alert("OTP SENT");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <LoginNavbar />
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
          <a className="otp__resend" onClick={handleresend}>
            Resend OTP
          </a>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default OTP_FAC;
