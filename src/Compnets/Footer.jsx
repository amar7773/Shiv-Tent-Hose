import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Services/tentlogo.png"; // 🟢 Apna logo yahan import karo

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-200 text-gray-800 pt-10 pb-6">
      {/* ======= Main Footer Container ======= */}
      <div className="max-w-[1266px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ======= 1️⃣ Company Info Section ======= */}
        <div>
          {/* 🟢 Company Logo + Name */}
          <div
            className="flex items-center gap-3 cursor-pointer mb-3"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Shiv Tent House Logo"
              className="w-[60px] h-[60px] rounded-full shadow-lg border border-gray-400"
            />
            <h1 className="text-2xl font-bold tracking-wider text-blue-900">
              Shiv Tent House
            </h1>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-700">
            We specialize in making your special moments unforgettable with
            stunning event decorations and creative setups — from weddings to
            birthdays and everything in between.
          </p>

          {/* 📍 Address */}
          <div className="flex items-start gap-3 mt-5">
            <GrLocation className="text-xl text-blue-900" />
            <p className="text-[15px]">
              2nd Floor, Near Yellow Tank, Kudi Bhagtasni Housing Board (West),
              <br />
              Jodhpur - 342005.
            </p>
          </div>

          {/* ☎ Contact */}
          <div className="flex items-center gap-3 mt-4">
            <MdOutlineLocalPhone className="text-xl text-blue-900" />
            <span className="text-[15px] font-semibold">+91-74-1394-0716</span>
          </div>
        </div>

        {/* ======= 2️⃣ Quick Links Section ======= */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-900">
            Quick Links
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                onClick={() => navigate("/about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                onClick={() => navigate("/services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                onClick={() => navigate("/contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors"
                onClick={() => navigate("/packeges")}
              >
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* ======= 3️⃣ Social Media Section ======= */}
        <div className="flex flex-col items-start md:items-center">
          <h2 className="text-xl font-semibold mb-3 text-blue-900">
            Follow Us
          </h2>
          <p className="text-[15px] mb-4 text-gray-700">
            Stay connected and see our latest event highlights!
          </p>

          {/* 🌐 Social Icons */}
          <div className="flex gap-5 text-2xl text-blue-900">
            <a href="#" className="hover:text-pink-600 transition-colors">
              <BsInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <SlSocialFacebook />
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              <RiTwitterXLine />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <SlSocialYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* ======= Footer Bottom Line ======= */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-[14px] text-gray-600">
        © {new Date().getFullYear()} Shiv Tent House | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
