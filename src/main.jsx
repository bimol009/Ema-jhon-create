import "./index.css";
import App from "./App";
import CheckOut from "./Components/Proceed/CheckOut";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import InvenTory from "./Components/InvenTory/InvenTory";
import OrderReview from "./Components/Rivew/orderReview";
import Orders from "./Components/Orders/Orders";
import React from "react";
import ReactDOM from "react-dom/client";
import Shop from "./Components/Shop/Shop";
import cartProductsLoader from "./Components/Loader/CartProductsLoader";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
     children:[
      {
        path: '/',
        element:<Shop></Shop>
      },
      {
        path: 'shop',
        element:<Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'orderReview',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'inventory',
        element: <InvenTory></InvenTory>
      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }

     ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
