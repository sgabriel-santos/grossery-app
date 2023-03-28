import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.headers["ngrok-skip-browser-warning"] = true;
  return config;
});

export default api;
