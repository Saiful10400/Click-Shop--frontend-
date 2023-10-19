import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";


const Apple = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <>
        <h1>total data :{data.length}</h1>
        <div className="grid grid-cols-1 md:p-0 px-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(item=><BrandCard key={item._id} item={item}></BrandCard>)
        }
        </div>
        </>
    );
};

export default Apple;