import React from "react";
import services from "../Data/servicesdata";
import img from "../assets/images/Services/serviceshero.jpg";
function Services() {
  return (
    <div className="w-full mt-25">
      {/* Hero Section */}
      <div
        className="relative h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`, // ← apni image ka path yahan deh
        }}
      >
        {/* 🔥 Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ Text content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Our Premium Decoration Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-[700px] mx-auto drop-shadow-md">
            Transforming your special moments into unforgettable memories with
            creativity, elegance, and perfection.
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="text-center my-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Why Choose Shiv Tent House?
        </h2>
        <p className="text-gray-600 max-w-[800px] mx-auto">
          With years of experience in event decoration and management, Shiv Tent
          House brings life to every event — from small gatherings to royal
          weddings. Our professional team designs each setup with precision and
          creativity that perfectly matches your style and theme.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 mb-16">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.contant}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-10 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Want to Book Your Event with Us?
        </h2>
        <p className="text-gray-200 mb-6">
          Let’s make your celebration truly unforgettable with Shiv Tent House’s
          premium décor services.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us Now
        </a>
      </div>
    </div>
  );
}

export default Services;
