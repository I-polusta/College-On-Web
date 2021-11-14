import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin__loginform from "./Admin/login/Admin__loginform";
import FacultyLogin from "./Faculty/Login/FacultyLogin";
import StudentLogin from "./Students/Login/StudentLogin";
import StudentSign from "./Students/Login/StudentSign";
import Admin_Signupform from "./Admin/login/Admin_Signupform";
import Email__verify from "./common_forms/Email__verify";
import Otp__verify from "./common_forms/Otp__verify";
import Password__form from "./common_forms/Password__form";
import Dashboard from "../pages/admin/dashboard";
import Admin_otp from "./Admin/login/Admin_otp";
import Admin_resetpassword from "./Admin/login/Admin_resetpassword";
import Create_announcement from "../pages/admin/Create_announcement";
import Announcements from "../pages/admin/Announcements";
import UserSelection from "./user-selection/UserSelection";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin-login" component={Admin__loginform}></Route>
        <Route path="/admin-signup" component={Admin_Signupform}></Route>
        <Route path="/verifyEmail" component={Email__verify}></Route>
        <Route path="/verifyOtp" component={Otp__verify}></Route>
        <Route path="/resetPassword" component={Password__form}></Route>
        <Route path="/faculty-login" component={FacultyLogin}></Route>
        <Route path="/student-sign" component={StudentSign}></Route>
        <Route path="/student-login" component={StudentLogin}></Route>
        <Route path="/admin-dashboard" component={Dashboard}></Route>
        <Route path="/verifyOtp-admin" component={Admin_otp} />
        <Route path="/resetpassword-admin" component={Admin_resetpassword} />
        <Route path="/" component={UserSelection}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
