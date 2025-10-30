import React from "react";
import { FaPalette, FaClock, FaUsers, FaStar } from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaPalette className="text-blue-600 w-6 h-6" />,
      title: "Creative Designs",
      desc: "Unique themes crafted perfectly for your event.",
    },
    {
      icon: <FaClock className="text-blue-600 w-6 h-6" />,
      title: "On-Time Setup",
      desc: "We deliver flawless arrangements on time.",
    },
    {
      icon: <FaUsers className="text-blue-600 w-6 h-6" />,
      title: "Experienced Team",
      desc: "Skilled professionals bringing your ideas to life.",
    },
    {
      icon: <FaStar className="text-blue-600 w-6 h-6" />,
      title: "Affordable Packages",
      desc: "High quality designs within your budget.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 bg-gray-50 sm:mt-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[26px] sm:text-[36px] font-bold text-black tracking-widest mb-2">
          Why Choose <span className="text-blue-600">Us?</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          We make every celebration special with creativity, reliability, and
          perfection.
        </p>
      </div>

      {/* ✅ Compact Scrollable Cards */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 px-2 scrollbar-hide">
        {features.map((item, i) => (
          <div
            key={i}
            className="min-w-[130px] sm:min-w-0 bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center flex-shrink-0 border border-gray-100"
          >
            <div className="flex justify-center mb-2">{item.icon}</div>
            <h3 className="text-[15px] font-semibold text-blue-900 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-700 text-[12px] leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
