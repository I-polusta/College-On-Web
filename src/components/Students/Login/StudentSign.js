import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../../API/Service";
import image from "../../../assets/studentL.png";

function StudentSign(props) {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      username,
    };
    await service_name
      .signupStudent(user)
      .then((response) => {
        if (response.data === "Valid Email OTP Sent") {
          console.log(response);
          history.push("/verifyOtp");
        }
        if (response.data === "User already present")
          window.alert(response.data + " please log in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e, id) => {
    if (id == "name") setName(e.target.value);
    else if (id == "username") setUsername(e.target.value);
  };

  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Student Sign Up</h2>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={(e) => handleChange(e, "name")}
            ></input>
            <input
              type="email"
              placeholder="Email Address"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            ></input>
            <input type="submit" value="Get OTP" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default StudentSign;
