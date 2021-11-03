import { Route, Router, Switch } from "react-router";
import "./App.css";
import React, { component } from "react";
import Admin__loginform from "./components/Admin/login/Admin__loginform";
import { BrowserRouter } from "react-router-dom";
import UserSelection from "./components/user-selection/UserSelection";
import FacultyLogin from "./components/Faculty/Login/FacultyLogin";
import StudentLogin from "./components/Students/Login/StudentLogin";
import StudentSign from "./components/Students/Login/StudentSign";
import Admin_Signupform from "./components/Admin/login/Admin_Signupform";
import Email__verify from "./components/common_forms/Email__verify";
import Otp__verify from "./components/common_forms/Otp__verify";
import Password__form from "./components/common_forms/Password__form";
function App() {
  return (
    <Route>
      <div className="App">
        <Switch>
          <Route path="/admin-login" component={Admin__loginform}></Route>
          <Route path="/admin-signup" component={Admin_Signupform}></Route>
          <Route path="/verifyEmail" component={Email__verify}></Route>
          <Route path="/verifyOtp" component={Otp__verify}></Route>
          <Route path="/resetPassword" component={Password__form}></Route>
          <Route path="/faculty-login" component={FacultyLogin}></Route>
          <Route path="/student-sign" component={StudentSign}></Route>
          <Route path="/student-login" component={StudentLogin}></Route>
          <Route path="/" component={UserSelection}></Route>
        </Switch>
      </div>
    </Route>
  );
}

export default App;
