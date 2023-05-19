import axios from "axios";
import {getLoggedUserToken} from "@/src/modules/auth/utils/getLoggedUserToken";

export const globalAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
});

// inject token in Authorization headers before the request is sent
globalAxios.interceptors.request.use((value) => {
  value.headers["Authorization"] = `Bearer ${getLoggedUserToken()}`;
  return value;
});
