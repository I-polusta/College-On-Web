import axios from "axios";
// const API_URL = "http://c2b1-157-37-147-85.ngrok.io/";
const API_URL = "http://192.168.119.236:8080/";

class admin_service {
  signupAdmin(admindetails) {
    return axios.post(API_URL + "create/Admin", admindetails);
  }
  verifyOtpAdmin(OTP) {
    return axios.post(API_URL + "validate/AdminOtp", OTP);
  }
  createPasswordAdmin(userpassword) {
    return axios.post(API_URL + "create/AdminNewPassword", userpassword);
  }
  verifyAdminLogin(userDetails) {
    return axios.post(API_URL + "authenticateAdmin", userDetails);
  }
  verifyEmailAdmin(adminU) {
    return axios.post(API_URL + "forgotStudentPassword", adminU);
  }
}

export default new admin_service();
