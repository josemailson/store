import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";
import { Products } from "./pages/products";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "products",
        element: <Products />
    }
  ]);