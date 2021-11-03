import React from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import service_name from "../../API/Service";
import image from "../../assets/email__verify.png";

function Email__verify() {
  const history = useHistory();
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    service_name.verifyEmail(username);
    history.push("/verifyOtp");
  };

  const handleChange = (e, id) => {
    if (id == "username") setUsername(e.target.value);
  };

  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>
      <div className="main__container">
        <div className="login__container">
          <h2>Enter your Email Id</h2>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            ></input>
            <input type="submit" value="Send OTP" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Email__verify;
