import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import image from "../../../assets/create__pasword.png";
import admin__service from "../../../API/admin__service";
function Admin_resetpassword() {
  const history = useHistory();
  const [password, setPass] = useState();
  const [newpass, setNewpass] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userpassword = {
      password,
    };
    if (password === newpass) {
      await admin__service
        .createPasswordAdmin(userpassword)
        .then((response) => {
          console.log(response);
          history.push("/admin-login");
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
      <nav>
        <a href="/">LOGO</a>
      </nav>

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

export default Admin_resetpassword;
