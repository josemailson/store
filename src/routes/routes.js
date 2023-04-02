import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page"
import { Details, loaderProducts } from "../components/Details";
import { CartPage } from "../pages/cart-page";
import Home from "../pages/home-page";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:id",
      element: <Details />,
      loader: loaderProducts
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);