import React, { useState } from "react";
import { useHistory } from "react-router";
import service_name from "../../../API/AuthService";
import image from "../../../assets/studentL.png";
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";
import { validEmail, validPassword } from "../../Validation/regex";
import LoginNavbar from "../../navbar/Auth__pages/LoginNavbar";
function StudentSign(props) {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [allEntry, setallEntery] = useState([]);
  const [emailAlert, setEmailAlert] = useState("");
  const [loader, setLoader] = useState(false);
  const loaderCSS = css`
    ${"" /* color: #7c64ef; */}
    position: absolute;
    top: 32%;
    left: 33%;
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      username,
    };

    const newEntry = { ...user };
    setallEntery([...allEntry, newEntry]);
    let object = { username: newEntry.username };
    if (username === "") {
      alert("Email required.");
    } else if (!validEmail.test(username)) {
      alert("Your email is invalid. Must contain '@' and a domain.");
    } else {
      setLoader(true);
      await service_name
        .signupStudent(user)
        .then((response) => {
          console.log(response);
          if (response.data === "Valid Email OTP Sent") {
            history.push({
              pathname: "/verifyOtp",
              state: object,
            });
          }
          if (response.data === "User not verified") {
            setLoader(false);
            history.push({
              pathname: "/verifyOtp",
              state: object,
            });
          }
          if (response.data === "User already present") {
            setLoader(false);
            window.alert(response.data + " please log in");
            history.push("student-login");
          } else if (response.data === "Otp verified create password") {
            setLoader(false);
            window.confirm(response.data);
            history.push({
              pathname: "/resetpassword",
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

  return (
    <div className="container">
      <LoginNavbar />
      <div className="main__container">
        <div className="login__container">
          <h1>Student Sign Up</h1>
          <form className="admin__login" onSubmit={handleSubmit}>
            <PropagateLoader loading={loader} css={loaderCSS}></PropagateLoader>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={(e) => handleChange(e, "name")}
            />
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
            />{" "}
            <p className="alerts">{emailAlert}</p>
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
