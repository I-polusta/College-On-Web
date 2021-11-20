import UserSelection from "../components/user-selection/UserSelection";
import Admin__loginform from "../components/Admin/login/Admin__loginform";
import FacultyLogin from "../components/Faculty/Login/FacultyLogin";
import StudentLogin from "../components/Students/Login/StudentLogin";
import StudentSign from "../components/Students/Login/StudentSign";
import Admin_Signupform from "../components/Admin/login/Admin_Signupform";
import Email__verify from "../components/common_forms/Email__verify";
import Otp__verify from "../components/common_forms/Otp__verify";
import Password__form from "../components/common_forms/Password__form";
import Admin_resetpassword from "../components/Admin/login/Admin_resetpassword";
import AdminDB from "../components/Admin/admin_dashboard/AdminDB";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Admin_otp from "../components/Admin/login/Admin_otp";
import Faculty from "../pages/admin/Faculty";
import PersonalDetailsForm from "../pages/student/profile/PersonalDetailsForm";
import Add__faculty from "../pages/admin/Add__faculty";
import DetailsCheck from "../components/Students/DetailsCheck";
import ViewPersonalDetails from "../pages/student/profile/ViewPersonalDetails";
import Create_announcement from "../pages/admin/Create_announcement";
import Announcements from "../pages/admin/Announcements";
import View__Attendance from "../components/Students/Dashboard/View__Attendance";
import Fac__view__class from "../components/Faculty/dashboard/Fac__view__class";
import Student__Result from "../components/Faculty/dashboard/Student__Result";
import View__marks from "../components/Students/Dashboard/View__marks";
import ReportForm from "../pages/Reports/ReportForm";
import AllReports from "../pages/Reports/AllReports";
import FacultyDetails from "../pages/Faculty/profile/FacultyDetails";
import DetailCheckFaculty from "../components/Faculty/Login/DetailChecksFaculty";
import FacultyDetailForm from "../pages/Faculty/profile/FacultyDetailForm";
import EmailFac__verify from "../components/Faculty/Login/EmailFac__verify";
import OTP_FAC from "../components/Faculty/Login/OTP_FAC";
import ForgotPassword from "../components/Faculty/Login/ForgotPassword";
import { Announcements_SF } from "../pages/admin/Announcements_SF";
import Reset_admin from "../components/Admin/login/Reset_admin";
import ResetFaculty from "../components/Faculty/Login/ResetFaculty";
import ResetStudent from "../components/Students/Login/ResetStudent";
import Logout from "../components/Logout";
import { AnnouncementsFaculty } from "../pages/admin/AnnouncementFaculty";

export const Routes = () => {
  return (
    <Switch>
      {/* Admin Routing */}
      <Route path="/" exact component={UserSelection} />
      <Route path="/admin-login" exact component={Admin__loginform} />
      <ProtectedRoute path="/allreports" exact component={AllReports} />
      <Route path="/admin-signup" exact component={Admin_Signupform} />
      <Route path="/student-login" exact component={StudentLogin} />
      <Route path="/resetpassword-admin" component={Admin_resetpassword} />
      <Route path="/verifyOtp-admin" exact component={Admin_otp} />
      <Route path="/addfaculty" exact component={Add__faculty} />
      <Route path="/viewfaculty" exact component={Faculty} />
      <Route path="/reset-admin-pw" exact component={Reset_admin} />
      {/* Faculty Routing */}
      <Route
        path="/personal-details-faculty"
        exact
        component={FacultyDetailForm}
      />
      <Route path="/faculty-login" exact component={FacultyLogin} />
      <Route path="/show-personal-teacher" exact component={FacultyDetails} />
      <Route path="/show-class-admin" exact component={Fac__view__class} />
      <Route
        path="/create-announcements"
        exact
        component={Create_announcement}
      />
      <Route path="/verifyEmail__faculty" exact component={EmailFac__verify} />
      <Route path="/verifyOtp-fac" exact component={OTP_FAC} />
      <Route
        path="/personal-details-teacher"
        exact
        component={FacultyDetailForm}
      />
      <Route path="/resetpassword-fac" exact component={ForgotPassword} />

      {/* Student Routing */}
      <Route path="/student-sign" exact component={StudentSign} />
      <Route path="/verifyEmail" exact component={Email__verify} />
      <Route path="/verifyOtp" exact component={Otp__verify} />
      <Route path="/resetPassword" exact component={Password__form} />
      <Route path="/personal-details-student" component={PersonalDetailsForm} />

      <Route path="/check-form" exact component={DetailsCheck} />
      <Route path="/check-form-teachers" exact component={DetailCheckFaculty} />
      <Route
        path="/show-personal-student"
        exact
        component={ViewPersonalDetails}
      />

      <Route path="/all-announcements" exact component={Announcements} />
      <Route
        path="/view-attendance-student"
        exact
        component={View__Attendance}
      />
      <Route path="/result-teachers" exact component={Student__Result} />
      <Route path="/view-marks" exact component={View__marks} />
      <Route path="/reports" exact component={ReportForm} />
      <Route
        path="/all-announcements-onlyview"
        exact
        component={Announcements_SF}
      />
      <Route path="all-reports" exact component={AllReports} />
      <Route path="/resetFaculty" exact component={ResetFaculty} />
      <Route path="/resetStudent" exact component={ResetStudent} />
      <Route path="/logout" exact component={Logout} />
      <Route
        path="/all-announcements-onlyviewFaculty"
        exact
        component={AnnouncementsFaculty}
      />
    </Switch>
  );
};
