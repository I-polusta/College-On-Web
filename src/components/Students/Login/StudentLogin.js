import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import image from "../../../assets/studentL.png";
import service_name from "../../../API/Service";
function StudentLogin() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userError, setUserError] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      username,
      password,
    };
    setUserError(Validate(userDetails));
    if (Object.keys(userError).length === 0) {
      await service_name
        .verifystudentLogin(userDetails)
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          if (response.status === 401)
            alert("Please create a account to login");
          if (token) {
            window.localStorage.setItem("student_token", token);
            history.push("/dashboard");
          }
          if (!token) {
            if (response.data === "false")
              alert("Incorrect Username or Password. Try Again");
            if (response.data === "User not found");
            {
              alert("User not found. Please create your account");
              history.push("/student-sign");
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (e, id) => {
    if (id == "username") setUsername(e.target.value);
    else if (id == "password") setPassword(e.target.value);
  };

  const Validate = (values) => {
    const error = {};
    const regexMail =
      /^[\w!#$%&'+/=?`{|}~^-]+(?:\.[\w!#$%&'+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}/;
    const regexPass = /^[a-zA-Z0-9@#!$%^_]{8,}$/;

    if (!values.username) {
      error.email = "**Email Is Required!";
    } else if (!regexMail.test(values.username)) {
      error.email = "**This is not a valid Email format!";
    }
    if (!values.password) {
      error.password = "**Password Is Required!";
    } else if (values.password.length < 8) {
      error.password = "**Password must be more than 8 characters!";
    } else if (values.password.length > 12) {
      error.password = "**Password must be less than 12 characters!";
    } else if (!regexPass.test(values.password)) {
      error.password = "**This is not a valid password!";
    }

    return error;
  };

  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <div>
            <h1>Student</h1>
          </div>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            ></input>
            <p className="required">{userError.email}</p>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={(e) => handleChange(e, "password")}
            ></input>
            <p className="required">{userError.password}</p>

            <a href="verifyEmail">Forgot Password</a>

            <input type="submit" value="Log In" />
          </form>

          <span className="login__span">
            New User? <a href="/student-sign">Sign Up</a>
          </span>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
