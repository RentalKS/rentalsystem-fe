import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Box } from "@mui/material";
import CreateCompany from '../pages/createCompany';
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Box><CreateCompany/></Box> },
      { path: "not-found", element: <Box>Not found</Box> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
