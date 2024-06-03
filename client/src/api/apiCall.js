import axios from "axios";

const BASE_API_URL = `${import.meta.env.VITE_API_URL}/api/v1`;

export const apiPost = async (route, payload) =>
  await axios.post(`${BASE_API_URL}${route}`, payload, {
    withCredentials: true,
  });

export const apiGet = async (route) =>
  await axios.get(`${BASE_API_URL}${route}`, {
    withCredentials: true,
  });

export const apiDelete = async (route) =>
  await axios.delete(`${BASE_API_URL}${route}`, {
    withCredentials: true,
  });
