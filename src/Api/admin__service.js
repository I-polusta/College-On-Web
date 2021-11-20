import axios from "axios";
import { BaseUrl } from "./BaseUrl";
class admin_service {
  signupAdmin(admindetails) {
    return axios.post(BaseUrl() + "create/Admin", admindetails,);
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
}

export default new admin_service();
