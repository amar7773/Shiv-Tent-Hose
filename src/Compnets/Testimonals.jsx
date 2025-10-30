import React from "react";
import test from "../Data/testimonal";
import { FaRegUser } from "react-icons/fa6";

function Testimonals() {
  return (
    <div className="mt-10 mb-5 sm:mb-15 sm:mt-15 px-4">
      <h1 className="text-[30px] sm:text-[40px] font-bold text-center mb-10 tracking-widest">
        Testimonials
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {test.map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto flex flex-col gap-3 bg-blue-200 px-5 py-4 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 text-[18px] sm:text-[20px] font-semibold">
              <FaRegUser className="text-blue-600 text-2xl" />
              <span>{item.name}</span>
            </div>

            {/* Event */}
            <div className="text-[15px] sm:text-[17px] font-semibold text-gray-700">
              {item.event}
            </div>

            {/* Rating (⭐️) */}
            <div className="text-yellow-500 text-lg">
              {"⭐".repeat(item.rating || 5)}
            </div>

            {/* Content */}
            <div className="text-[14px] sm:text-[16px] text-gray-800">
              {item.contant}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonals;
