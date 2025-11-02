import React from "react";

function Pacages() {
  const services = [
    {
      title: "Haldi Decoration",
      desc: "Traditional yellow theme decor with floral backdrop and seating setup.",
      plans: [
        { name: "Basic Package", price: "₹8,000" },
        { name: "Premium Package", price: "₹12,000" },
        { name: "Royal Package", price: "₹18,000" },
      ],
    },
    {
      title: "Mehndi Decoration",
      desc: "Colorful cushions, drapes, floral swings, and lighting for perfect vibes.",
      plans: [
        { name: "Basic Package", price: "₹10,000" },
        { name: "Premium Package", price: "₹15,000" },
        { name: "Royal Package", price: "₹22,000" },
      ],
    },
    {
      title: "Engagement Ceremony",
      desc: "Elegant stage setup with floral arch, lights, and background drapery.",
      plans: [
        { name: "Basic Package", price: "₹15,000" },
        { name: "Premium Package", price: "₹25,000" },
        { name: "Royal Package", price: "₹35,000" },
      ],
    },
    {
      title: "Sangeet Decoration",
      desc: "Vibrant lighting, stage setup, dance floor and colorful drapery.",
      plans: [
        { name: "Basic Package", price: "₹20,000" },
        { name: "Premium Package", price: "₹30,000" },
        { name: "Royal Package", price: "₹45,000" },
      ],
    },
    {
      title: "Reception Decoration",
      desc: "Royal backdrop, flower arrangements, and elegant lighting.",
      plans: [
        { name: "Basic Package", price: "₹25,000" },
        { name: "Premium Package", price: "₹40,000" },
        { name: "Royal Package", price: "₹60,000" },
      ],
    },
    {
      title: "Wedding Decoration",
      desc: "Grand mandap, floral canopy, lighting, and luxury stage setup.",
      plans: [
        { name: "Basic Package", price: "₹30,000" },
        { name: "Premium Package", price: "₹50,000" },
        { name: "Royal Package", price: "₹80,000" },
      ],
    },
    {
      title: "Birthday Party Decoration",
      desc: "Theme-based decor with balloons, backdrop, and lighting.",
      plans: [
        { name: "Basic Package", price: "₹5,000" },
        { name: "Premium Package", price: "₹10,000" },
        { name: "Royal Package", price: "₹15,000" },
      ],
    },
    {
      title: "Anniversary Decoration",
      desc: "Romantic floral and lighting setups for a perfect celebration.",
      plans: [
        { name: "Basic Package", price: "₹10,000" },
        { name: "Premium Package", price: "₹18,000" },
        { name: "Royal Package", price: "₹25,000" },
      ],
    },
    {
      title: "Wedding Entry Setup",
      desc: "Royal entry gate, flower tunnel and light walkway for the grand entrance.",
      plans: [
        { name: "Basic Package", price: "₹12,000" },
        { name: "Premium Package", price: "₹20,000" },
        { name: "Royal Package", price: "₹30,000" },
      ],
    },
  ];
  return (
    <section className="py-16 px-4 bg-gray-50 mt-20">
      <h2 className="text-center text-[30px] sm:text-[40px] font-bold mb-10 tracking-widest">
        Our <span className="text-blue-600">Packages</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <ul className="space-y-2">
              {service.plans.map((plan, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span className="font-medium text-gray-800">{plan.name}</span>
                  <span className="text-blue-700 font-semibold">
                    {plan.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pacages;
