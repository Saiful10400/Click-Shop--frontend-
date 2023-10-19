import { useLoaderData } from "react-router-dom";


const Samsung = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <>
        <h1>total data :{data.length}</h1>
        {
            data.map(item=><div><img src={item.url} alt="" /> <h1>{item.productName}</h1></div>)
        }
        </>
    );
};

export default Samsung;