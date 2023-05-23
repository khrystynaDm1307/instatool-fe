import axios from "axios";

const { REACT_APP_SERVER_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_SERVER_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default api;
