import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4001/api",
  // baseURL : "https://payroll-backend-umber.vercel.app/api",
  withCredentials: true,
});

export default apiClient;
