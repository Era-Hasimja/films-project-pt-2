import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: number;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export async function apiRequest<D = {}, R = unknown>({
  url,
  ...options
}: AxiosRequestConfig<D>) {
  return await Axios.request<D, AxiosResponse<R>>({
    ...options,
    url: `${import.meta.env.VITE_API_URL}/${url}`,
  });
}
