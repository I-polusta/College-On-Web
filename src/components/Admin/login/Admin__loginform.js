import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/admin__login.png";
import "../../loginform.css";
import { validEmail, validPassword } from "../../Validation/Validator";

function Admin__loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = (e) => {
    e.preventDefault();
    if (!validEmail.test(email)) {
      setEmailErr("invalid Email ID ");
    }
    if (!email) {
      setEmailErr("Email ID required");
    }
    if (!validPassword.test(password)) {
      setPwdError("invalid password");
    }
    if (!password) {
      setPwdError("password required");
    }
  };
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h1>Admin</h1>
          <form className="admin__login">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onBlur={(e) => setEmail(e.target.value)}
            ></input>
            {emailErr && <p>*{emailErr}</p>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onBlur={(e) => setPassword(e.target.value)}
            ></input>
            {pwdError && <p>*{pwdError}</p>}
            <Link to="verifyEmail">
              <a className="forgot" href="#">
                Forgot Password
              </a>
            </Link>
            <input type="submit" value="Log In" onClick={validate} />
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
