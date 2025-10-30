import React from "react";
import aboutImg from "../Assets/images/Services/wedddeco.webp"; // Add your about image
import aboutTeam from "../Assets/images/Services/haldidecoration.jpg";
import aboutHero from "../assets/images/Services/abouthero.webp"; // Add team image

function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 mt-22">
      {/* ===== Hero Section ===== */}
      <section
        className="relative text-center py-20 px-4 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutHero})`, // 👈 imported background image
        }}
      >
        {/* 🔥 Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ Text content */}
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wider mb-4 drop-shadow-md">
            About <span className="text-blue-400">Shiv Tent House</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-relaxed drop-shadow-md">
            Turning your dreams into reality with creative decorations, elegant
            setups, and unforgettable event experiences. We bring beauty and
            precision to every celebration.
          </p>
        </div>
      </section>

      {/* ===== Who We Are Section ===== */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-10">
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="About Shiv Tent House"
            className="rounded-xl shadow-lg hover:scale-105 transition-all duration-500 object-cover w-full h-[400px]"
          />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-semibold text-blue-900 tracking-wide">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded with a vision to create unforgettable experiences,{" "}
            <b>Shiv Tent House</b> is one of Jodhpur’s leading event decoration
            and management brands. We specialize in wedding décor, theme events,
            and party setups that truly reflect your emotions and style.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From vibrant Haldi & Mehndi ceremonies to elegant receptions and
            birthdays, our expert decorators design every element with precision
            and heart.
          </p>
        </div>
      </section>

      {/* ===== Mission & Vision Section ===== */}
      <section className="bg-blue-100 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-[17px]">
            Our mission is simple — <b>to make every event a lasting memory.</b>{" "}
            We aim to deliver creative, personalized, and budget-friendly
            decoration solutions that exceed expectations.
            <br />
            <br />
            Our vision is to be recognized as the most trusted and innovative
            event décor brand, spreading joy and creativity through every event
            we design.
          </p>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="max-w-6xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Creative & Custom Designs",
              desc: "Tailored themes that match your unique celebration style.",
            },
            {
              title: "On-Time Setup",
              desc: "We respect your time — every decoration is ready before schedule.",
            },
            {
              title: "Premium Materials",
              desc: "We use only high-quality tents, fabrics, and floral décor.",
            },
            {
              title: "Professional Team",
              desc: "Experienced decorators ensuring flawless event execution.",
            },
            {
              title: "Affordable Packages",
              desc: "Luxury designs that perfectly fit within your budget.",
            },
            {
              title: "Customer Satisfaction",
              desc: "Your happiness is our top priority — every time.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-200 rounded-xl py-8 px-5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Experience Section ===== */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Our Experience
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With hundreds of successful events and countless happy clients,
              <b> Shiv Tent House</b> has built a reputation for reliability and
              artistic excellence. Whether it’s a grand wedding or a cozy
              celebration, we add creativity and warmth to every moment.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We don’t just decorate spaces — we craft memories that last a
              lifetime. ✨
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={aboutTeam}
              alt="Our Team"
              className="rounded-xl shadow-lg hover:scale-105 transition-all duration-500 object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ===== Closing Quote ===== */}
      <section className="text-center py-10 px-6">
        <p className="text-2xl italic text-blue-900 font-semibold">
          “We don’t just decorate events, we create emotions that live forever.”
          💫
        </p>
      </section>
    </div>
  );
}

export default About;
