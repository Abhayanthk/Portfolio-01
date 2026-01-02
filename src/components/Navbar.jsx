import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[70px] flex justify-between items-center px-8 z-50 glass-header">
      <div className="flex items-center">
        <span className="text-white font-bold text-xl">Portfolio</span>
      </div>
      <ul className="hidden md:flex items-center justify-between w-1/3 min-w-[300px] px-4 py-3 rounded-full bg-[rgba(0,0,69,0.3)] backdrop-blur-md shadow-[0_0_10px_#727fde65]">
        <li>
          <a
            href="#home"
            className="text-white font-bold mx-2 no-underline hover:text-primary transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white font-bold mx-2 no-underline hover:text-primary transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-white font-bold mx-2 no-underline hover:text-primary transition"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white font-bold mx-2 no-underline hover:text-primary transition"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <a
          href="#"
          className="flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-primary text-gray-300 transition hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde6f]"
        >
          <i className="bx bxl-github text-xl"></i>
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-primary text-gray-300 transition hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde6f]"
        >
          <i className="bx bxl-linkedin-square text-xl"></i>
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-primary text-gray-300 transition hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde6f]"
        >
          <i className="bx bxl-twitter text-xl"></i>
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-primary text-gray-300 transition hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde6f]"
        >
          <i className="bx bxl-instagram-alt text-xl"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
