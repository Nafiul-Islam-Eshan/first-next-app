import Image from "next/image";
import { CiBookmark } from "react-icons/ci";

const FoodsCard = ({ food }) => {
  const { price, dish_name, category, image_link } = food;
  console.log(food);
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-auto h-70 gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
        <div className="flex flex-1 justify-center items-center w-65 h-30 p-5 bg-linear-to-r from-green-400 to-[#002Ff9] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125 overflow-hidden">
          <Image
            src={image_link}
            alt= {dish_name}
            width={100}
            height={100}
            style={{height: "120%", width: "80%"}}
          ></Image>
        </div>
        <div className="flex-2 max-w-sm h-auto space-y-3">
          <div className="flex justify-center items-center sm:justify-between">
            <h2 className="text-white text-lg flex-14 font-bold tracking-widest">
              {dish_name}
            </h2>
            <CiBookmark className="hidden sm:flex flex-2 hover:scale-120 duration-300 fill-white cursor-pointer w-5 h-10" ></CiBookmark>
          </div>
          <p className="badge badge-accent">{category} </p>
          <div className="flex gap-6 items-center justify-center">
            <p className="text-white font-bold text-lg">${price}</p>
          </div>
          {/* buy and add to card button */}
          <div className="flex justify-around items-center my-2">
            <button className="px-2 bg-blue-600 p-1 rounded-md text-white font-semibold shadow-xl shadow-blue-500/50 hover:ring-2 ring-blue-400 hover:scale-75 duration-500">
              Buy Now
            </button>
            <button className="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
