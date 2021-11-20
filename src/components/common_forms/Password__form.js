import React, { useState } from "react";

import { useHistory } from "react-router";
import image from "../../assets/create__pasword.png";
import service_name from "../../API/AuthService";
import LoginNavbar from "../navbar/Auth__pages/LoginNavbar";
function Password__form() {
  const history = useHistory();
  const [password, setPass] = useState();
  const [newpass, setNewpass] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let object = {
      username: history.location.state.username,
      password: password,
    };

    if (password === newpass) {
      await service_name
        .createPassword(object)
        .then((response) => {
          if (response.data === "Password Valid\nStudent SignUp Successful")
            history.push("/student-login");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert("password do not match");
  };

  const handleChange = (e, id) => {
    if (id === "password") setPass(e.target.value);
    else if (id === "conpass") setNewpass(e.target.value);
  };

  return (
    <div className="container">
      <LoginNavbar />
      <div className="main__container">
        <div className="login__container">
          <h1>Create Password</h1>
          <form className="admin__login" onSubmit={handleSubmit}>
            <label>New Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e, "password")}
            ></input>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="conpass"
              onChange={(e) => handleChange(e, "conpass")}
            ></input>

            <input type="submit" value="Update Password" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Password__form;
