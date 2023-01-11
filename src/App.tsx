import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Box } from "@mui/material";
import { Theme } from "./components/layout/Theme";

import { Routes } from "./routes/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex" }}>
          <Routes />
        </Box>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
