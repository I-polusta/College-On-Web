import React from "react";
import "./UserSelection.css";
import Student from "../../assets/userS.png";
import Teacher from "../../assets/userT.png";
import { Link } from "react-router-dom";
function UserSelection() {
  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>
      <div className="text__container">
        <h3>Log In into your account</h3>
      </div>
      <div className="user__container">
        <Link to="/student-login" style={{ textDecoration: "none" }}>
          <div className="usercards">
            <img src={Student} alt="user" className="user__img" />
            <h2>Student</h2>
          </div>
        </Link>
        <Link to="/faculty-login" style={{ textDecoration: "none" }}>
          <div className="usercards">
            <img src={Teacher} alt="user" />
            <h2>Teacher</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserSelection;
