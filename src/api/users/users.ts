import { apiRequest, User, UsersResponce } from "./Api";

export const getAllUsers = () =>
  apiRequest<{}, UsersResponce>({ url: "users" });

export const getSingleUser = (id: number) =>
  apiRequest<{}, User>({ url: `users/${id}` });
