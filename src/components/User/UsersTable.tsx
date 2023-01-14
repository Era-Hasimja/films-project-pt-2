import { User } from "../../api/users/Api";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Route } from "react-router-dom";

interface Props {
  userDataReponse: User[];
}

const handlerUserRoute = () => {
  <Route path="/localhost/users/${id}" />;
};

export const UsersTable = ({ userDataReponse }: Props) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "firstName",
      headerName: "FirstName",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "LastName",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 150,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
    },
    {
      field: "password",
      headerName: "Password",
      width: 150,
    },
    {
      field: "birthDate",
      headerName: "Birth Date",
      width: 150,
    },
  ];

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={userDataReponse}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onRowClick={(rows) => rows.id}
      />
    </Box>
  );
};
