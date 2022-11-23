import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import Banner from "../Pages/Home/Banner/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
