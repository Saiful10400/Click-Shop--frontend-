import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




const BrandCard = ({item}) => {
    const{productName,url,price,brand,type,ratings,description,quality,ram,rom}=item



const updateHandle=()=>{
    console.log("update clicked.")
}

const detailsHandle=()=>{
    console.log("details clicked.")
}



  return (
    <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
      <figure className=" w-full h-56 pt-2 ">
        <img className="w-full h-full object-contain"
          src={url}
          alt={productName}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg lg:text-3xl">{productName}</h2>

        <div className="flex gap-2 lg:gap-4"><span className="bg-gray-200  lg:text-base font-medium rounded-sm p-[2px] lg:rounded-lg text-sm  lg:p-1 text-orange-500" >{brand}</span> <span className="bg-gray-200  lg:text-base font-medium rounded-sm p-[2px] lg:rounded-lg text-sm  lg:p-1 text-orange-500" >{type}</span> <span className="bg-gray-200  lg:text-base font-medium rounded-sm p-[2px] lg:rounded-lg text-sm  lg:p-1 text-orange-500" >{quality}</span></div>

        <div className={`bg-gray-300 w-max text-lg font-normal rounded-lg p-2 ${rom?"hidden":"block"}`}><span>{ram} GB</span>+<span>{rom}GB</span></div>
        <h1 className="text-xl font-bold text-gray-700">{price} Taka</h1>
        <p className="h-36 text-base font-light overflow-hidden">{description}</p>

        <div className="card-actions justify-center">
          <button onClick={detailsHandle} className="btn btn-success">Details</button>
          <button onClick={updateHandle} className="btn btn-warning">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
