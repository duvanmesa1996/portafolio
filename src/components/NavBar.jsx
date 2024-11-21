import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enlaces de navegación
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
      {/* Renderizamos el componente Menu */}
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenu={() => setIsMenuOpen(!isMenuOpen)} // Alternamos el estado de abierto/cerrado
      />

      {/* Solo mostramos los enlaces si el menú está abierto */}
      {isMenuOpen &&
        links.map((l) => (
          <Link
            key={l.id}
            to={l.link} // 'to' es el id de la sección
            className="text-[30px] text-blue-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
            smooth={true}
            duration={500}
          >
            {l.label} {/* Mostrar el nombre del enlace */}
          </Link>
        ))}
    </div>
  );
};

export default NavBar;
