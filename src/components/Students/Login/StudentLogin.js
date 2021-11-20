import React, { useState } from "react";
import { useHistory } from "react-router";
import image from "../../../assets/studentL.png";
import service_name from "../../../API/AuthService";
import LoginNavbar from "../../navbar/Auth__pages/LoginNavbar";
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";

import { validEmail, validPassword } from "../../Validation/regex";
function StudentLogin() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userError, setUserError] = useState({});
  const [emailAlert, setEmailAlert] = useState("");

  const [pass, setPass] = useState("");
  const [passAlert, setPassAlert] = useState("");

  // var tokens;

  var loaderCSS = css`
    ${"" /* color: #7c64ef; */}
    position: absolute;
    top: 32%;
    left: 33%;
  `;

  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      username,
      password,
    };
    console.log(userDetails);
    if (username === "") {
      alert("Email required.");
    } else if (password === "") {
      alert("Password required.");
    } else if (!validEmail.test(username)) {
      alert("Your email is invalid. Must contain '@' and a domain.");
    } else if (!validPassword.test(password)) {
      alert(
        "Your password is invalid. Must contain atleast a string and an integer. Should be atleast 6 characters long"
      );
    } else {
      setLoader(true);
      await service_name
        .verifystudentLogin(userDetails)
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          console.log(token);
          if (token) {
            window.localStorage.setItem("user", token);
            window.localStorage.setItem("isAuthenticatedLogin", true);
            history.push("/check-form");
          } else if (response.status === 401)
            alert("Please create a account to login");
          else if (response.data === false) {
            setLoader(false);
            alert("Incorrect Username or Password. Try Again");
          } else if (response.data === "User not found") {
            setLoader(false);
            alert("User not found. Please create your account");
            history.push("/student-sign");
          }
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="container">
        <LoginNavbar />
        <div className="main__container">
          <div className="login__container">
            <div>
              <h1>Student</h1>
            </div>
            <form className="admin__login" onSubmit={handleSubmit}>
              <PropagateLoader
                loading={loader}
                css={loaderCSS}
              ></PropagateLoader>
              <input
                type="email"
                placeholder="Email Address"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (e.target.value === "") {
                    setEmailAlert("Email is required.");
                  } else if (!validEmail.test(e.target.value)) {
                    setEmailAlert("Enter a valid email");
                  } else {
                    setEmailAlert("");
                  }
                }}
              />
              <p className="alerts">{emailAlert}</p>
              {/* <p className="required">{userError.email}</p> */}
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value === "") {
                    setPassAlert("Password is required.");
                  } else if (!validPassword.test(e.target.value)) {
                    setPassAlert("Enter a valid password");
                  } else {
                    setPassAlert("");
                  }
                }}
              />
              <p className="alerts">{passAlert}</p>
              {/* <p className="required">{userError.password}</p> */}

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
    </>
  );
}

export default StudentLogin;
