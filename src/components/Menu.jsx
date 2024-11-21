import React from "react";

const Menu = ({ isMenuOpen, handleMenu }) => {
  return (
    <div>
      {/* Fondo borroso cuando el menú está abierto */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      )}

      {/* Ícono del menú */}
      <div
        onClick={handleMenu}
        className="w-[30px] h-[35px] cursor-pointer fixed top-2 left-2 z-50"
      >
        <div
          className={`w-[30px] h-[4px] left-0 top-[8px] absolute bg-neutral-500
          ${isMenuOpen && "transition-transform rotate-45"}`}
        />
        {!isMenuOpen && (
          <div className="w-[30px] h-[4px] left-0 top-[16px] absolute bg-zinc-300" />
        )}
        <div
          className={`w-[30px] h-[4px] left-0 top-[24px] absolute bg-zinc-300 ${
            isMenuOpen && "transition-transform rotate-[-45deg] top-[8px]"
          }`}
        />
      </div>

      {/* Menú de navegación */}
      {isMenuOpen && (
        <nav className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <a href="#about" className="text-2xl text-gray-800" onClick={handleMenu}>
            About
          </a>
          <a href="#trabajos" className="text-2xl text-gray-800" onClick={handleMenu}>
            Trabajos
          </a>
          <a href="#experience" className="text-2xl text-gray-800" onClick={handleMenu}>
            Experience
          </a>
          <a href="#contact" className="text-2xl text-gray-800" onClick={handleMenu}>
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default Menu;

