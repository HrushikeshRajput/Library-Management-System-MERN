// frontend/src/api.js
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "https://library-backend-tb5a.onrender.com";

const api = axios.create({
  baseURL,
  // optionally add headers/timeouts here
});

export default api;
