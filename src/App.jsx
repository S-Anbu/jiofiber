import React from "react";
import "./App.css"; // Import your CSS file
import g from "./assets/001.jpeg";
import a from "./assets/000.jpeg";
import b from "./assets/002.jpeg";
import c from "./assets/003.jpeg";
import d from "./assets/004.jpeg";
const services = [
  { icon: "📶", label: "New Connection" },
  { icon: "📡", label: "Router Setup" },
  { icon: "🎧", label: "Technical Support" },
  { icon: "🛠️", label: "Plan Upgrade" },
];

const testimonials = [
  {
    text: "“Excellent service! Elangovan got my connection up and running in no time.”",
    author: "Suresh",
  },
  {
    text: "“Very professional and helpful. Highly recommend.”",
    author: "Deepika",
  },
  {
    text: 'Great experience with JioFiber, internat speed is fairfastic."',
    author: "Vikram",
  },
];

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="bg-gray-100 bg-cover bg-center py-10 px-4 h-50  md:h-70"
        style={{
          backgroundImage:
            `url(${a})`,
        }}
      >
        <div className="hidden flex flex-col md:items-center md:mt-10">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Jio-Logo-2014-2016.png"
            alt="Jio Logo"
            className="w-20 md:w-50  mb-4"
          />

          <div className="">
            <h1 className="text-sm md:text-3xl text-white font-bold pl-2 md:mb-6">
              Bringing High-Speed Internet
            </h1>
            <h1 className="text-sm md:text-3xl text-white font-bold pl-12 md:mb-6">
              to Your Home
            </h1>
            {/* <img
            src="https://th.bing.com/th/id/OIP.nzks8VIC7WX5L536mxWFRQHaEJ?w=944&h=529&rs=1&pid=ImgDetMain"
            alt="Jio Logo"
            className="w-50  mb-4"
          /> */}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-10 text-center px-4">
        <img src={g} alt="Aniket" className="rounded-full w-32 mx-auto" />
        <h2 className="text-xl font-semibold mt-4">ABOUT ME</h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Hello! I'm <span className="text-blue-600 font-bold">Elangovan</span>, a certified JioFiber Associate with over 5+
          years of experience. I specialize in providing high-speed broadband
          services with reliable customer support.
        </p>
        <a href={`tel:+919280232646`} className="">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-3xl font-bold hover:bg-blue-700 transition">
            Contact Me
          </button>
        </a>
        <div className="py-10 text-center">
          
        <a
          href="https://wa.me/9280232646"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          <div className="flex gap-3">

          <img src="https://api.iconify.design/logos:whatsapp-icon.svg" alt="whatsapp"  className="w-5"/> 
          <span  className="font-bold">Chat on WhatsApp</span>
          </div>
        </a>
      </div>
      </div>

      {/* Services */}
      <div className="py-10 px-4 bg-gray-50">
        <h2 className="text-xl font-semibold text-center mb-6">MY SERVICES</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 w-32 text-center shadow hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <p className="text-sm font-medium">{service.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Area */}
      <div className="py-10 px-4">
        <h2 className="text-xl font-semibold text-center mb-6">
          PLAN DETAILS
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={b}
            alt="Map 1"
            className="rounded-lg w-full sm:w-96"
          />
          <img
            src={c}
            alt="Map 2"
            className="rounded-lg w-full sm:w-96"
          />
          <img
            src={d}
            alt="Map 2"
            className="rounded-lg w-full sm:w-96"
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-10 px-4 bg-gray-50">
        <h2 className="text-xl font-semibold text-center mb-6">TESTIMONIALS</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 w-72 shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 mb-4">
                “{t.text.replace(/“|”/g, "")}”
              </p>
              <p className="text-right font-semibold text-blue-600">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-10 text-center">
        <a
          href="https://wa.me/9280232646"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;

// https://myjiostatic.cdn.jio.com/cms/assets/jiofiber/discover/unlimited-desktop-1184x520-feb.webp