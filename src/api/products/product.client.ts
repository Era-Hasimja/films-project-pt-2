import { apiRequest } from "../users/Api";
import { Product, ProductsResponse } from "./products";

export const getAllProducts = () =>
  apiRequest<{}, ProductsResponse>({ url: "products" });

export const getSingleProduct = (id: number) =>
  apiRequest<{}, Product>({ url: `products/${id}` });
