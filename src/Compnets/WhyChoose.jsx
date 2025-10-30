import React from "react";
import { FaPalette, FaClock, FaUsers, FaStar } from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaPalette className="text-blue-600 w-8 h-8" />,
      title: "Creative Designs",
      desc: "Unique themes crafted to suit your occasion perfectly.",
    },
    {
      icon: <FaClock className="text-blue-600 w-8 h-8" />,
      title: "On-Time Setup",
      desc: "We deliver flawless arrangements right on schedule.",
    },
    {
      icon: <FaUsers className="text-blue-600 w-8 h-8" />,
      title: "Experienced Team",
      desc: "Skilled professionals making your vision come alive.",
    },
    {
      icon: <FaStar className="text-blue-600 w-8 h-8" />,
      title: "Affordable Packages",
      desc: "Premium quality at prices that fit your budget.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 sm:mt-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] sm:text-[38px] font-bold text-black tracking-widest mb-3">
          Why Choose <span className="text-blue-600">Us?</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          We make every celebration special with creativity, reliability, and
          perfection.
        </p>
      </div>

      {/* ✅ Scrollable on small screens, grid on large screens */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0">
        {features.map((item, i) => (
          <div
            key={i}
            className="min-w-[220px] sm:min-w-0 bg-blue-200 p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center flex-shrink-0 border border-gray-100"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
