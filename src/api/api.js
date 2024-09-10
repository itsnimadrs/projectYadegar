import axios from "axios";
export const BASE_URL = "http://localhost:8000/api";
export const PRODUCTS_URL = "http://localhost:8000/api/products";
export const ORDERS_URL = "/orders";
export const CATEGORIES_URL = "/categories";
export const LOGIN_URL = "auth/login";
export const REFRESHTOKEN_URL = "auth/token";

// export const getProduct = async (_, id) => {
//   const { data } = await client.get(`/products/${id}`);
//   return data;
// };

export const allCategoriesRequest = async () => {
  const response = await fetch("http://localhost:8000/api/categories");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
