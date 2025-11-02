import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home.jsx";
import Product from "../Pages/Product.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import WishList from './../Pages/WishList.jsx';
import ProductDetails from './../Pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/products",
        Component: Product,
      },
      {
        path: "/wishlist",
        Component: WishList,
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>
      }
    ],
  },
]);

export default router;
