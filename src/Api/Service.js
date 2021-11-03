import axios from "axios";
const API_URL = "http://ec1f-49-36-215-67.ngrok.io/";

const service_name = {
  signupStudent(name, username) {
    const student = {
      name,
      username,
    };

    axios
      .post(`${API_URL}createStudent`, student)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  verifyOtp(userOtp) {
    const student = {
      userOtp,
    };
    const a = userOtp;
    console.log(typeof a);
    axios
      .post(`${API_URL}validateStudentOtp`, student)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  createPassword(pass) {
    const student = {
      pass,
    };
    console.log(pass);
    console.log(typeof pass);
    axios
      .post(`${API_URL}createStudentNewPassword`, pass)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  verifyEmail(username) {
    const studentU = {
      username,
    };

    axios
      .post(`${API_URL}forgotStudentPassword`, studentU)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default service_name;
