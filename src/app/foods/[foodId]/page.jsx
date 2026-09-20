import Image from "next/image";

// const getFoodData = async ({foodId}) => {
//   const url = `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`;
//   try {
//     const res = await fetch(url);
//     if(!res.ok){
//       throw new Error ("Something Wrong");
//     }
//     const data = await res.json();
//     return data;

//   } catch (error) {
//     return error
//   }
// }

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  //  Foods Data fetching
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`;
  const res = await fetch(url);
  const { data: foods } = await res.json();
  // check if api food id and route food id are same
  const food = foods.find((f) => f.id === foodId);
  const { id, price, dish_name, category, image_link } = food;

  return (
    <div className="max-w-6xl w-[90%] mx-auto my-6">
      {food ? (
        <div className="card w-auto h-auto bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
          <div className="card-content p-4 relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-50 h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 rounded-xl shadow-lg border-2 border-white/20 bg-blue-500 flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight mx-auto">
                <Image
                  width={40}
                  height={40}
                  src={image_link}
                  alt={dish_name}
                ></Image>
              </div>

              <div className="flex flex-col">
                <div>
                  <h2
                    title="SuperApp"
                    className="text-lg font-bold text-white/90 truncate"
                  >
                    {dish_name}
                  </h2>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90">
                    Available
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-white/80 mb-2">
                    Core Features
                  </h3>
                  <div className="flex flex-wrap -mx-1">
                    <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                      Real-time Sync
                    </div>
                    <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                      Cloud Backup
                    </div>
                    <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                      Multi-device Support
                    </div>
                    <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                      Offline Mode
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-white/80 mb-2">
                    Other Features
                  </h3>
                  <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-3 h-3 mr-1 text-white/70"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <span title="Dark Mode" className="truncate">
                        Dark Mode
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-3 h-3 mr-1 text-white/70"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <span title="Custom Themes" className="truncate">
                        Custom Themes
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-3 h-3 mr-1 text-white/70"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <span title="Password Protection" className="truncate">
                        Password Protection
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-3 h-3 mr-1 text-white/70"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <span title="Data Export" className="truncate">
                        Data Export
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-3 h-3 mr-1 text-white/70"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <span title="Widgets" className="truncate">
                        Widgets
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl text-rose-500">Food Item is not available</h2>
      )}
    </div>
  );
};

export default FoodDetailsPage;
