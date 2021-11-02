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
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Admin</h2>
          <form className="admin__login">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {emailErr && <p>Your email is invalid</p>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {pwdError && <p>Your password is invalid</p>}
          </form>
          <Link to="resetPassword">
            <a className="forgot" href="#">
              Forgot Password
            </a>
          </Link>
          {/* <Link to="/admin-dashboard"> */}
          <button className="btn__admin" type="submit" onClick={validate}>
            Log In
          </button>
          {/* </Link> */}
        </div>
        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}
<ConditionalLink></ConditionalLink>;

export default Admin__loginform;
