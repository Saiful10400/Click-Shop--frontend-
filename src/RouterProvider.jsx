import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import Samsung from "./components/Home/brands/samsung/Samsung";
import Apple from "./components/Home/brands/apple/Apple";
import Realme from "./components/Home/brands/realme/Realme";
import Google from "./components/Home/brands/google/Google";
import Nothing from "./components/Home/brands/nothing/Nothing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myCart",
        element: <Cart></Cart>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brands/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/samsung"),
      },
      {
        path: "/brands/apple",
        element: <Apple></Apple>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/apple"),
      },
      {
        path: "/brands/realme",
        element: <Realme></Realme>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/realme"),
      },
      {
        path: "/brands/oneplus",
        element: <h1>samsung</h1>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/oneplus"),
      },
      {
        path: "/brands/google",
        element: <Google></Google>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/google"),
      },
      {
        path: "/brands/nothing",
        element: <Nothing></Nothing>,
        loader: () => fetch("https://assignment-10-mu.vercel.app/brand/nothing"),
      },
    ],
  },
]);

export default router;
