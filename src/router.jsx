import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ShoppingCard from "./Pages/ShoppingCard";
import Description from "./Pages/Description";
import CreateProduct from "./Pages/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <ShoppingCard /> },
      { path: "checkout", element: <Checkout /> },
      { path: "category", element: <Category /> },
      { path: "description", element: <Description /> },
      { path: "createProduct", element: <CreateProduct /> },
    ],
  },
]);

export default router;
