import { useContext, useEffect, useState } from "react";
import { parentContext } from "../DataProvider";
import CartItem from "./CartItem";

const Cart = () => {
    const[data,setData]=useState([])
    const{user}=useContext(parentContext)
    
    
useEffect(()=>{
    fetch(`http://localhost:5000/show_cart_item/${user.email}`)
    .then(res=>res.json())
    .then(data=>setData(data))
},[])

 
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
           {
            data.map(item=><CartItem key={item._id} item={item}></CartItem>)
           }
        </div>
    );
};

export default Cart;