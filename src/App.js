import { Route, Switch } from "react-router";
import "./App.css";
import Admin__layout from "./components/Admin/dashboard__layout/layout/Admin__layout";
import UserSelection from "./components/user-selection/UserSelection";
import Dashboard from "./pages/admin/Dashboard";
import Routes from "./components/Routes";
import Admin__loginform from "./components/Admin/login/Admin__loginform";
import FacultyLogin from "./components/Faculty/Login/FacultyLogin";
import StudentLogin from "./components/Students/Login/StudentLogin";
import StudentSign from "./components/Students/Login/StudentSign";
import Admin_Signupform from "./components/Admin/login/Admin_Signupform";
import Email__verify from "./components/common_forms/Email__verify";
import Otp__verify from "./components/common_forms/Otp__verify";
import Password__form from "./components/common_forms/Password__form";

import dashboard from "./pages/admin/Dashboard";
function App() {
  return (
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
        <Route path="/admin-dashboard" component={dashboard}></Route>
        <Route path="/" component={UserSelection}></Route>
      </Switch>
    </div>
  );
}

export default App;
