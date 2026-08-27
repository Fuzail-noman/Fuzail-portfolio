import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

import resume from "../assets/My Resume (3).pdf";
export function Component() {
  const linkClasses = ({ isActive }) =>
    `block py-2 px-3 transition-all duration-300
     ${
       isActive
         ? "text-blue-500 border-b-2 border-blue-500"
         : "text-gray-400 hover:text-blue-400"
     }`;

  return (
    <Navbar fluid rounded className="!bg-[rgb(0,0,0)] px-4">
      {/* Logo */}
      <NavbarBrand>
     
        <span className="self-center text-3xl font-semibold text-blue-500">
          Fuzail Raza
        </span>
      </NavbarBrand>

      {/* Right Side */}
      <div className="flex md:order-2 gap-2">
      <a
  href={resume}
  download
  className="inline-flex items-center gap-2 border border-blue-600 px-4 py-1.5 rounded-md font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-white hover:text-blue-600"
>
 

  CV
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
    />
  </svg>
</a>
        <NavbarToggle />
      </div>

      {/* Links */}
      <NavbarCollapse>
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkClasses}>
          About me
        </NavLink>

        <NavLink to="/project" className={linkClasses}>
          Projects
        </NavLink>

      
      </NavbarCollapse>
    </Navbar>
  );
}
