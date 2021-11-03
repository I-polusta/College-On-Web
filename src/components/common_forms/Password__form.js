import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import image from "../../assets/create__pasword.png";
import service_name from "../../API/Service";
function Password__form() {
  const history = useHistory();
  const [pass, setPass] = useState();
  const [newpass, setNewpass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass === newpass) service_name.createPassword(pass);
    else alert("wrong password");
  };

  const handleChange = (e, id) => {
    if (id === "pass") setPass(e.target.value);
    else if (id === "conpass") setNewpass(e.target.value);
  };

  return (
    <div className="container">
      <nav>
        <a href="/">LOGO</a>
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h2>Create Password</h2>
          <form className="admin__login" onSubmit={handleSubmit}>
            <label>New Password</label>
            <input
              type="password"
              placeholder="Password"
              name="pass"
              onChange={(e) => handleChange(e, "pass")}
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
