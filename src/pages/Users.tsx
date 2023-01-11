import { Alert, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { apiRequest } from "../api/users/Api";
import { UsersTable } from "../components/User/UsersTable";

export const Users = () => {
  const { data, isLoading, error } = useQuery("users", apiRequest);

  {
    isLoading && <CircularProgress />;
  }

  {
    error && (
      <Alert severity="error">
        The request to retrive products failed, please try again!
      </Alert>
    );
  }

  {
    data && <UsersTable />;
  }

  return <UsersTable />;
};
