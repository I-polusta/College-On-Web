import React from "react";
import { Route, Router, Switch } from "react-router";
import { component } from "react";
import Admin__loginform from "./Admin/login/Admin__loginform";
import { BrowserRouter } from "react-router-dom";
import UserSelection from "./user-selection/UserSelection";
import FacultyLogin from "./Faculty/Login/FacultyLogin";
import StudentLogin from "./Students/Login/StudentLogin";
import StudentSign from "./Students/Login/StudentSign";
import Admin_Signupform from "./Admin/login/Admin_Signupform";
import Email__verify from "./common_forms/Email__verify";
import Otp__verify from "./common_forms/Otp__verify";
import Password__form from "./common_forms/Password__form";
import dashboard from "../pages/admin/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin-login" component={Admin__loginform}></Route>
      <Route path="/admin-signup" component={Admin_Signupform}></Route>
      <Route path="/verifyEmail" component={Email__verify}></Route>
      <Route path="/verifyOtp" component={Otp__verify}></Route>
      <Route path="/resetPassword" component={Password__form}></Route>
      <Route path="/faculty-login" component={FacultyLogin}></Route>
      <Route path="/student-sign" component={StudentSign}></Route>
      <Route path="/student-login" component={StudentLogin}></Route>
      <Route path="/" component={dashboard}></Route>
    </Switch>
  );
};

export default Routes;
