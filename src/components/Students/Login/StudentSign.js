import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../../API/Service";
import image from "../../../assets/studentL.png";
import logo from "../../../assets/logotbg.png";
function StudentSign(props) {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [userError, setUserError] = useState({});
  const [allEntry, setallEntery] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const user = {
      name,
      username,
    };
    setUserError(Validate(user));
    if (Object.keys(userError).length === 0 && isSubmit) {
      const newEntry = { ...user };
      setallEntery([...allEntry, newEntry]);
      let object = { username: newEntry.username };
      await service_name
        .signupStudent(user)
        .then((response) => {
          if (response.data === "Valid Email OTP Sent") {
            console.log(response);
            history.push({
              pathname: "/verifyOtp",
              state: object,
            });
          }
          if (response.data === "User already present") {
            window.alert(response.data + " please log in");
            history.push("student-login");
          } else if (response.data === "Otp verified create password") {
            window.confirm(response.data);
            history.push({
              pathname: "/resetpassword",
              state: object,
            });
          } else if (response.data === "OTP still not verified") {
            window.alert(response.data);
            history.push("/verifyOtp");
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
    const regexPass =
      /^[\w!#$%&'+/=?`{|}~^-]+(?:\.[\w!#$%&'+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}/;

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
      <nav>
        <img src={logo} alt="logo" />
      </nav>

      <div className="main__container">
        <div className="login__container">
          <h1>Student Sign Up</h1>
          <form className="admin__login" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
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
            <input type="submit" value="Get OTP" />
          </form>
        </div>

        <div className="img__container">
          <img src={image} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default StudentSign;
