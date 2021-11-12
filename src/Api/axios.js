import axios from "axios";

const instance = axios.create({
  baseURL: "http://f534-49-36-215-67.ngrok.io/",
});

export default instance;
