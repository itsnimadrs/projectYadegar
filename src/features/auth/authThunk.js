import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { BASE_URL, LOGIN_URL, REFRESHTOKEN_URL } from "../../api/api";
// *****************
const api = axios.create({ baseURL: BASE_URL });

//data= username:string password:string
export const loginUser = createAsyncThunk(`auth/login`, async (data) => {
  const response = await api.post(`${LOGIN_URL}`, data);
  console.log(response.data.token);
  localStorage.setItem("accessToken", response.data.token.accessToken);
  localStorage.setItem("refreshToken", response.data.token.refreshToken);

  return response.data;
});

//data= refreshToken:string
export const refreshTokenThunk = createAsyncThunk(
  `auth/token`,
  async (data) => {
    const response = await api.post(`${REFRESHTOKEN_URL}`, data);
    console.log("res2", response);
    return response.data;
  }
);
