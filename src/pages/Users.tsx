import { Alert, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { getAllUsers } from "../api/users/users";
import { UsersTable } from "../components/User/UsersTable";

export const Users = () => {
  const { data, isLoading, error } = useQuery("users", getAllUsers);

  console.log("data", data?.data?.users);
  return (
    <>
      {isLoading && <CircularProgress />}

      {error && (
        <Alert severity="error">
          The request to retrive products failed, please try again!
        </Alert>
      )}

      {data && <UsersTable userDataReponse={data?.data?.users} />}
    </>
  );
};
