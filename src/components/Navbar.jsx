import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      href: "#home",
    },
    {
      id: 2,
      title: "About",
      href: "#about",
    },
    {
      id: 3,
      title: "Skills",
      href: "#skills",
    },
    {
      id: 4,
      title: "Contact",
      href: "#contact",
    },
  ];
  const publicNavLinks = [
    {
      id: 1,
      iClass: "bx bxl-github text-2xl",
      href: "https://github.com/Abhayanthk",
    },
    {
      id: 2,
      iClass: "bx bxl-linkedin-square text-2xl",
      href: "https://www.linkedin.com/in/abhayanth-k-675905323/",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 h-[70px] flex justify-between items-center px-8 z-50 glass-header">
      <div className="flex items-center">
        <span className="text-white font-bold text-xl">Portfolio</span>
      </div>
      <ul className="hidden md:flex items-center justify-between w-1/3 min-w-[300px] px-4 py-3 rounded-full bg-[rgba(0,0,69,0.3)] backdrop-blur-md shadow-[0_0_10px_#727fde65]">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="text-white font-bold mx-2 no-underline hover:text-primary transition"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-10">
        {publicNavLinks.map((link) => {
          return (
            <a href={link.href} key={link.id}>
              <i className={link.iClass}></i>
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
