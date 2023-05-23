import axios from "axios";

export const globalAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
});

// inject token in Authorization headers before the request is sent
// We no longer need this since token pass token to the http request from ssr
// globalAxios.interceptors.request.use((value) => {
//   value.headers["Authorization"] = `Bearer ${getLoggedUserToken()}`;
//   return value;
// });
