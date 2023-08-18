import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Box } from "@mui/material";

import Reservation from "../pages/Rentals/Reservation";
import AddReservation from "../pages/Rentals/AddReservation";
import CarList from "../pages/browseVehicles/CardList";
import DashboardRent from "../pages/dashboard/DashboardRent";
import Login from "../pages/users/Login";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/users/Register";



export const routes: RouteObject[] = [

  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Box><Login /></Box> },
      { path: "register", element: <Box><Register /></Box> },
      { path: "home", element: <Box><HomePage /></Box> },
      { path: "dashboard", element: <Box><DashboardRent /></Box> },
      { path: "reservation", element: <Box><Reservation /> </Box> },
      { path: "AddReservation", element: <Box><AddReservation /></Box> },
      { path: "carList", element: <Box><CarList /></Box> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
