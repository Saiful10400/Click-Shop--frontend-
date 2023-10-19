import Slider from "./Slider";

// brands logo.
import samsung from "../../../public/image/brand log/samsung.png";
import apple from "../../../public/image/brand log/apple.png";
import realme from "../../../public/image/brand log/realme.png";
import mi from "../../../public/image/brand log/mi.png";
import vivo from "../../../public/image/brand log/vivo.png";
import nothing from "../../../public/image/brand log/nothing.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h1 className=" mt-10 mb-6 lg:mb-20 text-center text-gray-500 lg:mt-20 text-xl lg:text-4xl font-bold">
        shop by brand
      </h1>

      <div className="grid mx-2 lg:mx-0 gap-5 lg:gap-3 grid-cols-2 lg:grid-cols-6">
        <Link to={"/brands/samsung"}>
          <div className=" shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]  bg-gray-200 rounded-full p-2 flex justify-center items-center">
            <img className="w-full" src={samsung} alt="" />
          </div>
        </Link>

        <Link to={"/brands/apple"}>
          <div className=" shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]  bg-gray-200 rounded-full p-2 flex justify-center items-center">
            <img className="w-full" src={apple} alt="" />
          </div>
        </Link>
        <Link to={"/brands/realme"}>
          <div className=" shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]  bg-gray-200 rounded-full p-2 flex justify-center items-center">
            <img className="w-full" src={realme} alt="" />
          </div>
        </Link>
        <Link to={"/brands/mi"}>
          <div className=" shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]  bg-gray-200 rounded-full p-2 flex justify-center items-center">
            <img className="w-full" src={mi} alt="" />
          </div>
        </Link>
        <Link to={"/brands/vivo"}>
          <div className=" shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]  bg-gray-200 rounded-full p-2 flex justify-center items-center">
            <img className="w-full" src={vivo} alt="" />
          </div>
        </Link>
        <Link to={"/brands/nothing"}>
          <div className=" shadow-xl hover:scale-110 transition-all lg:h-[200px] h-[100px] lg:w-[200px]  bg-gray-200 rounded-full p-2 flex justify-center items-center">
            <img className="w-full" src={nothing} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
