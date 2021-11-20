import axios from "axios";
import { BaseUrl } from "./BaseUrl";
class service_name {
  signupStudent(student) {
    return axios.post(BaseUrl() + "createStudent", student);
  }

  verifyOtp(OTP) {
    return axios.post(BaseUrl() + "validateStudentOtp", OTP);
  }
  verifyfacultyOtp(OTP) {
    return axios.post(BaseUrl() + "validate/Otp/teacher", OTP);
  }
  ResetPasswordAdmin(data) {
    return axios.post(BaseUrl() + "update/password/Admin", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }
  ResetPasswordStudent(data) {
    return axios.post(BaseUrl() + "update/Password/Student", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }
  ResetPasswordFaculty(data) {
    return axios.post(BaseUrl() + "update/password/teacher", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }

  createPassword(userpassword) {
    return axios.post(BaseUrl() + "createStudentNewPassword", userpassword);
  }
  createfacultyPassword(userpassword) {
    return axios.post(BaseUrl() + "create/password/teacher", userpassword);
  }
  verifyEmail(studentU) {
    return axios.post(BaseUrl() + "forgotStudentPassword", studentU);
  }
  verifyfacultyEmail(studentU) {
    return axios.post(BaseUrl() + "forgot/password/teacher", studentU);
  }
  verifystudentLogin(userDetails) {
    return axios.post(BaseUrl() + "authenticateStudent", userDetails);
  }
  logOut() {
    localStorage.removeItem("user2");
    localStorage.removeItem("isAuthenticatedLogin");
  }
  signupAdmin(admindetails) {
    return axios.post(BaseUrl() + "create/Admin", admindetails);
  }
  verifyOtpAdmin(OTP) {
    return axios.post(BaseUrl() + "validate/AdminOtp", OTP);
  }
  createPasswordAdmin(userpassword) {
    return axios.post(BaseUrl() + "create/AdminNewPassword", userpassword);
  }
  verifyAdminLogin(userDetails) {
    return axios.post(BaseUrl() + "authenticateAdmin", userDetails);
  }
  verifyEmailAdmin(adminU) {
    return axios.post(BaseUrl() + "forgotStudentPassword", adminU);
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem("isAuthenticatedLogin"));
  }
  verifyTeacherLogin(userDetails) {
    return axios.post(BaseUrl() + "authenticate/Teacher", userDetails);
  }
}

export default new service_name();
