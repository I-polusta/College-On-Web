import axios from "axios";
const API_URL = "http://5f73-47-31-235-147.ngrok.io/";

class service_name {
  signupStudent(student) {
    return axios.post(API_URL + "createStudent", student);
  }

  verifyOtp(OTP) {
    return axios.post(API_URL + "validateStudentOtp", OTP);
  }

  createPassword(userpassword) {
    return axios.post(API_URL + "createStudentNewPassword", userpassword);
  }
  verifyEmail(studentU) {
    return axios.post(API_URL + "forgotStudentPassword", studentU);
  }

  verifystudentLogin(userDetails) {
    return axios.post(API_URL + "authenticateStudent", userDetails);
  }
}

export default new service_name();
