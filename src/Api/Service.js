import axios from "axios";
// const API_URL = "https://c2b1-157-37-147-85.ngrok.io/";
const API_URL = "http://192.168.49.236:8080/";

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
