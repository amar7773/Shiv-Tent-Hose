import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full bg-blue-50 py-10 px-4 sm:px-8 lg:px-16 mt-20">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Contact <span className="text-blue-600">Shiv Tent House</span>
        </h1>
        <p className="text-gray-600 mt-2 text-[16px]">
          We’d love to hear from you! Get in touch for bookings or queries.
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Get In Touch
          </h2>

          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+91 7413940716</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">shivtenthouse@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600 leading-tight">
                Near Yellow Tank, Kudi Bhagtasni Housing Board (West),
                <br />
                Jodhpur – 342005, Rajasthan.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 font-medium">
              Working Hours:{" "}
              <span className="text-gray-600">
                Mon–Sun | 9:00 AM – 10:00 PM
              </span>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Send a Message
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message..."
              className="border border-gray-300 p-3 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Attractive Ending Section */}
      <div
        className="mt-16 relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529634895783-2b7f1b88df6a?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let’s Make Your Event Memorable 💍
          </h2>
          <p className="text-white mt-3 max-w-2xl text-[16px]">
            From weddings to birthdays, Shiv Tent House creates magical moments
            with elegant decor, lighting, and perfection in every detail.
          </p>
          <button className="mt-5 bg-white text-blue-700 font-semibold px-6 py-2 rounded-md hover:bg-blue-100 transition-all">
            Book Your Event Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
