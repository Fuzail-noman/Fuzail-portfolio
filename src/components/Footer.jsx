import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub , BsBehance} from "react-icons/bs";
import { NavLink } from "react-router-dom";


export default function HeaderFooter() {

 
    "text-white hover:text-purple-400 transition font-medium";

  return (
    <div className="bg-black w-full text-white border-t border-gray-700">

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 mt-5 md:px-16 py-4">

        <h1 className="text-purple-500 text-xl font-bold mb-4 md:mb-0">
          Fuzail Raza
        </h1>

      <nav className="flex space-x-6">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `pb-1 ${
        isActive
          ? "border-b-2 border-purple-500 text-purple-400"
          : "text-white hover:text-purple-400"
      }`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `pb-1 ${
        isActive
          ? "border-b-2 border-purple-500 text-purple-400"
          : "text-white hover:text-purple-400"
      }`
    }
  >
    About me
  </NavLink>

  <NavLink
    to="/project"
    className={({ isActive }) =>
      `pb-1 ${
        isActive
          ? "border-b-2 border-purple-500 text-purple-400"
          : "text-white hover:text-purple-400"
      }`
    }
  >
    Projects
  </NavLink>
</nav>


        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          

          <a
            href="http://github.com/Fuzail-noman"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-purple-700 text-white rounded-md shadow-md hover:scale-105 transition"
          >
            <BsGithub size={20} />
          </a>
         <a
  href="https://www.linkedin.com/in/m-fuzail/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-blue-600 text-white rounded-md shadow-md hover:scale-105 transition"
>
  <BsLinkedin size={20} />
</a>
        </div>
      </header>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 bg-gray-900 py-4 px-6 md:px-16 rounded-md mx-6 md:mx-16 my-4">

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-purple-400" />
          <span className="text-gray-200">fuzailm431@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-purple-400" />
          <span className="text-gray-200">+92 334 2404333</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-purple-400" />
          <span className="text-gray-200">Karachi</span>
        </div>

      </div>

      <footer className="text-center text-gray-400 py-4">
        Copyright © 2026 Fuzail Raza. All rights reserved.
      </footer>

    </div>
  );
}
