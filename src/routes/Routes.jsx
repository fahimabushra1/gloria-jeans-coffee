import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
              {
                 path: "/",
                 element: <Home/>,
              },
              {
                 path: "/login",
                 element: <Login/>,
              },
              {
                 path: "/sign-up",
                 element: <SignUp/>,
              },
        ]
    },
    
  ]);

