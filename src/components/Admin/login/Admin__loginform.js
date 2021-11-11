import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/admin__login.png";
import "../../loginform.css";
import { validEmail, validPassword } from "../../Validation/Validator";
import { useHistory } from "react-router";
import admin__service from "../../../API/admin__service";

function Admin__loginform() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      username,
      password,
    };
    await admin__service
      .verifyAdminLogin(userDetails)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        if (response.status === 401) alert("Please create a account to login");
        if (token) {
          window.localStorage.setItem(1, token);
          history.push("/dashboard");
        }
        if (!token) {
          alert("login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e, id) => {
    if (id == "username") setUsername(e.target.value);
    else if (id == "password") setPassword(e.target.value);
  };

  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h1>Admin</h1>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e, "password")}
            ></input>
            <Link to="verifyEmail">
              <a className="forgot" href="#">
                Forgot Password
              </a>
            </Link>
            <input type="submit" value="Log In" />
          </form>
        </div>
        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Admin__loginform;
