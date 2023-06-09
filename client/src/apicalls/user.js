import { apiRequest } from "./index";

export const RegisterUser = async (payload) =>
  apiRequest("post", "http:/localhost:4000/api/user/register", payload);
export const LoginUser = async (payload) =>
  apiRequest("post", "/api/user/login", payload);
