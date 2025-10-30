import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ navigation ke liye
import gallery from "../Data/gallery";

function Gallery() {
  const navigate = useNavigate();

  return (
    <div id="gallery" className="mt-7 sm:mt-15 px-4">
      <h1 className="text-[30px] sm:text-[40px] font-semibold text-center mb-10 tracking-widest">
        Our Gallery
      </h1>

      {/* ✅ Mobile: horizontal scroll | Desktop: grid wrap */}
      <div className="flex flex-nowrap sm:flex-wrap gap-6 overflow-x-auto sm:overflow-visible justify-start sm:justify-center px-2 pb-4">
        {gallery.slice(0, 6).map(
          (
            item,
            i // ✅ sirf 6 images show on home
          ) => (
            <div
              key={i}
              className="
              min-w-[220px] sm:min-w-[250px] md:w-[350px] lg:w-[400px]
              h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px]
              flex-shrink-0 bg-blue-200 rounded-xl shadow-md
              hover:scale-105 transition-all duration-300 overflow-hidden
            "
            >
              <img
                src={item.img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )
        )}
      </div>

      {/* ✅ View Full Gallery Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/gallery")}
          className="bg-blue-200 text-[20px] sm:text-[22px] font-semibold px-10 sm:px-20 py-2 rounded-md hover:bg-blue-500 hover:text-white"
        >
          View Full Gallery →
        </button>
      </div>
    </div>
  );
}

export default Gallery;
