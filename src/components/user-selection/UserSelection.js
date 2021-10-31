import React from "react";
import "./UserSelection.css";
import Student from "../../assets/userS.png";
import Teacher from "../../assets/userT.png";
function UserSelection() {
  return (
    <div className="container">
      <nav>
        <a href="#">LOGO</a>
      </nav>
      <div className="text__container">
        <h3>Log In into your account</h3>
      </div>
      <div className="user__container">
        <div className="usercards">
          <img src={Student} alt="user" />
          <h2>Student</h2>
        </div>
        <div className="usercards">
          <img src={Teacher} alt="user" />
          <h2>Teacher</h2>
        </div>
      </div>
    </div>
  );
}

export default UserSelection;
