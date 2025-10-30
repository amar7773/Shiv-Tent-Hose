import React from "react";
import ourservices from "../Data/ourservices";
import { useNavigate } from "react-router-dom";
function OurServices() {
  const navigate = useNavigate();
  return (
    <div className="mt-5 sm:mt-10">
      <h1 className="text-[30px] sm:text-[40px] font-bold text-center tracking-widest">
        Our Services
      </h1>
      <div className="flex flex-nowrap gap-7 md:gap-20 mt-5 sm:mt-10 items-center xl:justify-center overflow-x-auto px-4">
        {ourservices.map((item, i) => (
          <div className="w-[300px] h-[300px] p-2 space-y-4 flex flex-col items-center rounded-md shadow bg-blue-200">
            <div className="w-full h-[70%] overflow-hidden">
              <img
                key={i}
                src={item.img}
                className="object-cover shadow-md rounded-md"
              />
            </div>
            <div className="w-full h-[10%]">
              <span className="truncate text-[18px] text-center tracking-wider">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-5 sm:mt-10 px-4 flex flex-col items-center sm:justify-center gap-7">
        <span className="text-[15px] sm:text-[22px] font-semibold">
          At Shiv Tent House, we believe every event deserves to be celebrated
          beautifully.✨ We don’t just decorate — we create experiences that
          live forever in your memories ✨.
        </span>
        <div className="">
          <button
            className="bg-blue-200 text-[20px] sm:text-[22px] font-semibold px-10 sm:px-20 py-2 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => navigate("/services")}
          >
            See Our All Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
