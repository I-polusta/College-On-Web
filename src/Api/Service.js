import axios from "axios";

const API_URL = "http://ec1f-49-36-215-67.ngrok.io/";

const service_name = {
  verifyEmail(name, username) {
    const student = {
      name,
      username,
    };
    let check = false;
    axios.post(`${API_URL}createStudent`, student).then((response) => {
      console.log(response);
      if (response.data === "OTP Sent") {
        check = true;
        console.log(check);
      }
    });
    return check;
  },

  verifyOtp(userOtp) {
    const student = {
      userOtp,
    };
    const a = userOtp;
    console.log(typeof a);
    axios.post(`${API_URL}validateStudentOtp`, student).then((response) => {
      console.log(response);
    });
  },

  createPassword(pass) {
    axios.post(`${API_URL}createStudentNewPassword`, pass).then((response) => {
      console.log(response);
    });
  },
};

export default service_name;
