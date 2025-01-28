import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyWebsite</div>
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-500">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-500">About</a>
          <a href="#services" className="block px-4 py-2 hover:bg-blue-500">Services</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
