import axios from "axios";

const API_URL = "/api/auth/";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const refreshAccessToken = async (refreshToken) => {
  const response = await axios.post(`http://localhost:8000/api/auth/token`, {
    refreshToken,
  });
  console.log("ref", response);
  return response.data;
};
