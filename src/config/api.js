import axios from "axios";

export const API_BASE_URL = "https://smkvpcop-backend.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      
      if (error.response.status === 401) {
       
        console.error("Authentication failed:", error.response.data);
        localStorage.removeItem("token");
        delete api.defaults.headers.common["Authorization"];
       
        return Promise.reject({
          message: "Authentication failed",
          status: 401,
        });
      }
      console.error("API Error:", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
      return Promise.reject({
        message: "No response from server",
        status: 0,
      });
    } else {
      console.error("Request setup error:", error.message);
      return Promise.reject({
        message: "Request setup failed",
        status: 0,
      });
    }
  }
);
