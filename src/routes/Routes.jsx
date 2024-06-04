import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import AllProducts from "../pages/dashboard/AllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import EditProduct from "../pages/dashboard/EditProduct";
import CoffeeDetail from "../pages/dashboard/CoffeeDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
         {
            path: "/",
            element: <Home/>,
            loader:()=> fetch("http://localhost:3000/coffees"),
         },
         {
            path: "/products/:id",
            element: <ProductDetails/>,
            loader:({params})=>fetch(`http:localhost:3000/coffees/${params.id}`),
         },
         {
            path: "/about",
            element: <About/>,
         },
         {
            path: "/login",
            element: <Login/>,
         },
         {
            path: "/register",
            element: <SignUp/>,
         },
        ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
         path: "",
          element:
          <PrivateRoute>
          <Dashboard/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/all-products",
          element:
          <PrivateRoute>
            <AllProducts/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/add-products",
          element:<AddProduct/>
        },
        {
          path: "/dashboard/edit-product/:id",
          element:<EditProduct/>,
          loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        },
        {
          path: "/dashboard/detail-product/:id",
          element:<CoffeeDetail/>,
          loader:({params})=>
            fetch(`http://localhost:3000/coffees/${params.id}`),
        },
       
      ]
    },
    
  ]);

