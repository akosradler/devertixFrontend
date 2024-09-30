import { Box, Container, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { type MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const meta: MetaFunction = () => {
  return [{ title: "Devertix frontend" }, { name: "description", content: "Devertix frontend" }];
};

const queryClient = new QueryClient();

export default function Index() {
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"}>
            <Outlet />
          </Box>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
