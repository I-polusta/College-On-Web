import axios from "axios";
import { BaseUrl } from "./BaseUrl";
class service_name {
  createFaculty(data) {
    console.log(`Bearer ${localStorage.getItem("user")}`);
    return axios.post(BaseUrl() + "create/Teacher", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }
  createTeacherDetails(data) {
    console.log(`Bearer ${localStorage.getItem("user")}`);
    return axios.post(BaseUrl() + "create/Teacher", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }

  deleteFaculty(data) {
    return axios.post(BaseUrl() + "delete/teacher", data);
  }
}

export default new service_name();
