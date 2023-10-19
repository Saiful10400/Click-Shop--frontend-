import { useLoaderData } from "react-router-dom";

 

const Details = () => {
    const data=useLoaderData()
    return (
        <div>
            {data.productName}
        </div>
    );
};

export default Details;