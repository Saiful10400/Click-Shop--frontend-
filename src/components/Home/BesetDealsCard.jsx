import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const BesetDealsCard = ({ item }) => {
  const {
    productName,
    url,
    price,
    brand,
    type,
    ratings,
    description,
    quality,
    ram,
    _id,
    rom,
  } = item;
  return (
    <Link to={`/details/${_id}`}><div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
    <figure className=" w-full h-56 pt-2 relative ">
      <img
        className="w-full h-full object-contain"
        src={url}
        alt={productName}
      />
      <span className="bg-yellow-100 absolute bottom-0 left-1 text text flex items-center gap-1 rounded-lg px-2 text-yellow-600">
        {ratings}/10
        <AiTwotoneStar></AiTwotoneStar>
      </span>
    </figure>

    <div className="card-body p-0 px-1 pb-4 border-t-2 mt-3 text-start">
      <h2 className="card-title text-lg lg:text-xl">{productName}</h2>

      <div
        className={` w-max border-2 font-sans font-light rounded-lg p-2 ${
          ram == 1 ? "hidden" : "block"
        }`}
      >
        <span>{ram} GB</span>+<span>{rom}GB</span>
      </div>

      <div>
        <span className="line-through">{price}৳</span>{" "}
        <span className="bg-red-400 p-2 rounded-lg text-white">
          {parseInt(parseInt(price) - parseInt(price) * 0.15 - 10)}৳
        </span>
      </div>

     
    </div>
  </div></Link>
  );
};

export default BesetDealsCard;
