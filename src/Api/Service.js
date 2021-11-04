import axios from "axios";
const API_URL = "http://95f8-49-36-215-67.ngrok.io/";

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

  createPassword(password) {
    const student = {
      password,
    };
    console.log(password);
    console.log(typeof password);
    var isJsonParsable = (student) => {
      try {
        JSON.parse(student);
      } catch (e) {
        return false;
      }
      return password;
    };
    axios
      .post(`${API_URL}createStudentNewPassword`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        password,
      })
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

  verifystudentLogin(username, password) {
    const student = {
      username,
      password,
    };
    axios
      .post(`${API_URL}authenticateStudent`, student)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        console.log(token);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default service_name;
