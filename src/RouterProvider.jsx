import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";

const router=createBrowserRouter([{
    path:"/",
    element:<Root></Root>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/myCart",
        element:<Cart></Cart>
    },
    {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
    }
]
}])

export default router