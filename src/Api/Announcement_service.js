import axios from "axios";
const API_URL = "http://192.168.0.124:8080/";

class service_name {
  createAnnouncement(data) {
    return axios.post(API_URL + "create/announcement", data);
  }
  deleteAnnouncement(data) {
    return axios.post(API_URL + "delete/announcement", data);
  }
  viewAnnouncement() {
    return axios.get(API_URL + "show/announcement");
  }
}

export default new service_name();
