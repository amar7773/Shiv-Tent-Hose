import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Services/shiv-tent.png"; // ✅ apne logo ka sahi path lagaye

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate("");

  return (
    <div className="fixed top-0 left-0 w-full h-[100px] z-[1000] bg-blue-200 text-black font-semibold flex justify-between items-center px-4 shadow-md md:px-8 md:mb-8">
      {/* ✅ Logo + Brand Name */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Shiv Tent House Logo"
          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <h1 className="text-[20px] sm:text-[32px] font-bold text-gray-800 tracking-wide">
          Shiv Tent House
        </h1>
      </div>

      {/* ✅ Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-10 text-[22px] text-black font-semibold tracking-widest">
        <li className="hover:text-gray-500" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="hover:text-gray-500" onClick={() => navigate("/about")}>
          About
        </li>
        <li
          className="hover:text-gray-500"
          onClick={() => navigate("/services")}
        >
          Services
        </li>
        <li
          className="hover:text-gray-500"
          onClick={() => {
            if (window.location.pathname === "/") {
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" });
            } else {
              navigate("/");
              setTimeout(() => {
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 500);
            }
          }}
        >
          Gallery
        </li>
        <li
          className="hover:text-gray-500"
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>

      {/* ✅ Mobile Menu Button */}
      <button
        className="md:hidden text-[40px] text-black font-semibold ml-2"
        onClick={() => setOpen(!open)}
      >
        <HiBars3 />
      </button>

      {/* ✅ Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen z-[1100] w-full bg-blue-200 shadow-md transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <div
            className="flex items-center gap-3"
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Shiv Tent House"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <h1 className="text-[20px] font-bold text-gray-800">
              Shiv Tent House
            </h1>
          </div>
          <button
            className="md:hidden text-[30px] text-black font-semibold ml-2"
            onClick={() => setOpen(!open)}
          >
            <RxCross2 />
          </button>
        </div>

        <ul className="p-8 space-y-7 text-black text-[25px] font-semibold">
          <li
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setOpen(false);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/services");
              setOpen(false);
            }}
          >
            Services
          </li>
          <li
            onClick={() => {
              setOpen(false);
              if (window.location.pathname === "/") {
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 500);
              }
            }}
          >
            Gallery
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
