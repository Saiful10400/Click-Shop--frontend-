import { useEffect, useState } from "react";
import BesetDealsCard from "./BesetDealsCard";


const BestDeals = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://assignment-10-mu.vercel.app/products/best_deals")
        .then(res=>res.json())
        .then(datas=>setData(datas))
    },[])
    console.log(data)
    return (
        <div className="mb-5">
            <h1 className=" mt-10 mb-6 lg:mb-20 text-center text-gray-500 lg:mt-20 text-xl lg:text-4xl font-bold">Best Deals</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 lg:px-0 px-4 gap-10">
                {
                    data.map(item=><BesetDealsCard key={item._id} item={item}></BesetDealsCard>)
                }
            </div>
        </div>
    );
};

export default BestDeals;