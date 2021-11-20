import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../../API/AuthService";
import image from "../../../assets/admin__login.png";
import LoginNavbar from "../../navbar/Auth__pages/LoginNavbar";
function Admin_Signupform() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [userError, setUserError] = useState({});
  const [allEntry, setallEntery] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      username,
    };
    setUserError(Validate(user));
    if (Object.keys(userError).length === 0) {
      const newEntry = { ...user };
      setallEntery([...allEntry, newEntry]);
      let object = { username: newEntry.username };
      await service_name
        .signupAdmin(user)
        .then((response) => {
          console.log(response);
          if (response.data === "Valid email OTP Sent") {
            history.push({
              pathname: "/verifyOtp-admin",
              state: object,
            });
          }
          if (response.data === "User not verified") {
            history.push({
              pathname: "/verifyOtp-admin",
              state: object,
            });
          }
          if (response.data === "User already present") {
            window.alert(response.data + " please log in");
            history.push("/admin-login");
          } else if (response.data === "Otp verified create password") {
            window.confirm(response.data);
            history.push({
              pathname: "/resetpassword-admin",
              state: object,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (e, id) => {
    if (id == "name") setName(e.target.value);
    else if (id == "username") setUsername(e.target.value);
  };

  const Validate = (values) => {
    const error = {};
    const regexMail =
      /^[\w!#$%&'+/=?`{|}~^-]+(?:\.[\w!#$%&'+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}/;
    const regexName = /^[A-Za-z. ]{3,30}$/;
    const regexPass = /^[a-zA-Z0-9@#!$%^_]{8,}$/;

    if (!values.name) {
      error.Name = "**Name Is Required!";
    } else if (!regexName.test(values.name)) {
      error.Name = "**This is not a valid Name format!";
    }
    if (!values.username) {
      error.email = "**Email Is Required!";
    } else if (!regexMail.test(values.username)) {
      error.email = "**This is not a valid Email format!";
    }

    return error;
  };

  return (
    <div className="container">
      <LoginNavbar />
      <div className="main__container">
        <div className="login__container">
          <h1>Admin Sign Up</h1>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
              id="admin_name"
              name="name"
              onChange={(e) => handleChange(e, "name")}
            ></input>

            <p className="required">{userError.Name}</p>
            <input
              type="email"
              placeholder="Email Address"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            ></input>

            <p className="required">{userError.email}</p>
            <input type="submit" value="GET OTP" />
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
