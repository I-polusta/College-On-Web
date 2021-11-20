import axios from "axios";
import { BaseUrl } from "./BaseUrl";
class service_name {
  createStudentDetails(data) {
      console.log(`Bearer ${localStorage.getItem("user")}`);
    return axios.post(BaseUrl() + "details/personal/student", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }
}

export default new service_name();
