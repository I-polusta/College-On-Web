import React, { useState } from "react";
import { useHistory } from "react-router";
import admin__service from "../../../API/admin__service";
import image from "../../../assets/admin__login.png";
function Admin_Signupform() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      username,
    };
    await admin__service
      .signupAdmin(user)
      .then((response) => {
        if (response.data === "Valid email OTP Sent") {
          console.log(response);
          history.push("/verifyOtp-admin");
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
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h1>Admin Sign Up</h1>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
              id="admin_name"
              name="name"
              onChange={(e) => handleChange(e, "name")}
            ></input>
            <input
              type="email"
              placeholder="Email Address"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            ></input>

            <input type="submit" value="Sign In" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Admin_Signupform;
