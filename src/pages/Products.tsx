import { Alert, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { getAllProducts } from "../api/products/product.client";
import { ProductsTable } from "../components/Products/ProductsTable";

export const Products = () => {
  const { data, isLoading, error } = useQuery("products", getAllProducts);

  return (
    <>
      <h1>Products</h1>

      {isLoading && <CircularProgress />}

      {error && (
        <Alert severity="error">
          The request to retrive products failed, please try again!
        </Alert>
      )}

      {data && <ProductsTable />}
    </>
  );
};
