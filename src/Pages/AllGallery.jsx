import React, { useState } from "react";
import allgallery from "../Data/allgallery";
import img from "../assets/images/Services/bluetetnt.webp";

function AllGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen mt-22">
      {/* 🔹 Hero Section */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <h1 className="relative text-white text-3xl sm:text-5xl font-bold z-10 text-center tracking-widest">
          Our Stunning <span className="text-blue-400">Gallery</span>
        </h1>
      </div>

      {/* 🔹 Gallery Grid */}
      <div className="p-6 sm:p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {allgallery.map((item, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(item.img)}
            >
              {/* 🖼 Image */}
              <img
                src={item.img}
                alt={`Gallery ${i}`}
                className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover transform group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 ease-in-out"
              />

              {/* 🔹 Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-lg font-semibold tracking-widest uppercase">
                  View Image
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Lightbox Modal */}
      {selectedImage && (
        <div
          className="mt-25 fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-[90%] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            {/* 🖼 Enlarged Image */}
            <img
              src={selectedImage}
              alt="Expanded"
              className="w-full h-auto max-h-[85vh] rounded-2xl shadow-2xl border border-gray-700 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AllGallery;
