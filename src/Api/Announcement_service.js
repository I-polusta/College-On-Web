import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import authHeader from "./AuthHeader";
class service_name {
  createAnnouncement(data) {
    return axios.post(BaseUrl() + "create/announcement", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }
  deleteAnnouncement(data) {
    return axios.post(
      BaseUrl() + "delete/announcement",

      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    );
  }
  viewAnnouncement() {
    return axios.get(BaseUrl() + "show/announcement", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
  }
  logOut() {
    localStorage.removeItem("user2");
    localStorage.removeItem("isAuthenticatedLogin");
  }
}

export default new service_name();
