import axios from "axios";

export const axiosInstance = axios.create({
 baseURL : import.meta.env.MODE === "development" ? import.meta.env.VITE_BASE_URL + "/api" : import.meta.env.VITE_SOCKET_URL+"/api",

  withCredentials: true,
});
