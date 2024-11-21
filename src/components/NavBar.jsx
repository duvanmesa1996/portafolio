import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { link: "about", label: "About", id: 1 },
    { link: "trabajos", label: "Trabajos", id: 2 },
    { link: "experience", label: "Experience", id: 3 },
    { link: "contact", label: "Contact", id: 4 },
  ];

  return (
    <div
      className={`absolute ${
        !isMenuOpen
          ? "z-[100]  w-[30px] p-10 left-4 h-[30px]"
          : "items-center justify-around flex flex-col z-[300] fixed w-screen h-screen bg-blue-300"
      }`}
    >
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen &&
        links.map((l) => (
          <Link
            key={l.id}
            to={l.link} 
            className="text-[30px] text-blue-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} 
            smooth={true}
            duration={500}          >
            {l.label} 
          </Link>
        ))}
    </div>
  );
};

export default NavBar;
