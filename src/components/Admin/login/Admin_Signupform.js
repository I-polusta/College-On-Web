import React from "react";
import image from "../../../assets/admin__login.png";

function Admin_Signupform() {
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h1>Admin Sign Up</h1>
          <form className="admin__login">
            <input
              type="text"
              placeholder="Enter your Name"
              id="admin_name"
              name="admin_name"
            ></input>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
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
