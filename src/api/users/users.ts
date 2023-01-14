import { apiRequest, User, UsersResponse } from "./Api";

export const getAllUsers = () =>
  apiRequest<{}, UsersResponse>({ url: "users" });

export const getSingleUser = (id: number) =>
  apiRequest<{}, User>({ url: `users/${id}` });
