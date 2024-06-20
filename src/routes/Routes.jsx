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
import EditProfile from "../pages/EditProfile";
import PopularCoffees from "../pages/PopularCoffees";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
         {
            path: "/",
            element: <Home/>,
            loader:()=> fetch("http://localhost:5000/coffees"),
         },
         {
            path: "/products/:id",
            element: <ProductDetails/>,
            loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
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
          </PrivateRoute>,
           loader:()=> fetch("http://localhost:5000/coffees"),
        },
        {
         path: "/dashboard/edit-profile/:id",
          element:
          <PrivateRoute>
          <EditProfile/>
          </PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/user/get/${params.id}`),
        },
        {
          path: "/dashboard/all-products",
          element:
          <PrivateRoute>
            <AllProducts/>
          </PrivateRoute>
        },
        {
          path: "/dashboard/popular-coffees",
          element:
          <PrivateRoute>
            <PopularCoffees/>
          </PrivateRoute>,
        },
        {
          path: "/dashboard/add-products",
          element:
         <PrivateRoute>
           <AddProduct/>
         </PrivateRoute>,
          loader:()=> fetch("http://localhost:5000/coffees"),
        },
        {
          path: "/dashboard/edit-product/:id",
          element:<EditProduct/>,
          loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
        },
       
      ]
    },
    
  ]);

