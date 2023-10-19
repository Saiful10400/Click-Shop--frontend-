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
    rom,
  } = item;
  return (
    <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl">
      <figure className=" w-full h-56 pt-2 ">
        <img
          className="w-full h-full object-contain"
          src={url}
          alt={productName}
        />
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
    </div>
  );
};

export default BesetDealsCard;
