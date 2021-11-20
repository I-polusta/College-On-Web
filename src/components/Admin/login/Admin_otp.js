import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../../API/AuthService";
import image from "../../../assets/otp.png";
import LoginNavbar from "../../navbar/Auth__pages/LoginNavbar";

function Admin_otp() {
  const history = useHistory();
  const [otp, setOtp] = useState();
  const [disable, setDisable] = useState(false);
  const userOtp = parseInt(otp, 10);
  let object = {
    userOtp: userOtp,
    username: history.location.state.username,
  };
  const handleOtp = async (e) => {
    e.preventDefault();
    setDisable(true);

    await service_name
      .verifyOtpAdmin(object)
      .then((response) => {
        console.log(response);
        if (response.data === true) {
          history.push({
            pathname: "/resetpassword-admin",
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
          <a className="otp__resend" href="#">
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
