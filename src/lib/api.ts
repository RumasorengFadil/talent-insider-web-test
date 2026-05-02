// lib/api.ts
import axios from "axios";
import Cookies from "js-cookie";
import { useTopLoader } from "nextjs-toploader";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  useTopLoader().start();

  const token = Cookies.get("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    useTopLoader().done();
    return response;
  },

  async (error) => {
    return Promise.reject(error);
  }
);
