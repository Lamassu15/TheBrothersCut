import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Dropdown-meny för mindre skärmar */}
      {isMenuOpen && (
        <div className="lg:hidden absolute right-0 w-full z-50 backdrop-blur-xl">
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className="block hover:bg-slate-50 pt-2 pb-2 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:bg-slate-50 pt-2 pb-2 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="block hover:bg-slate-50 pt-2 pb-2 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="block hover:bg-slate-50 pt-2 pb-2 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="block hover:bg-slate-50 pt-2 pb-2 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="block hover:bg-slate-50 pt-2 pb-2 text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Book now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
