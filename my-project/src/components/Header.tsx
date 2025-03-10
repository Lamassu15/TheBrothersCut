import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Logo from "./Logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigationslänkar för större skärmar
  const leftLinks = [
    { href: "/", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#team", text: "Team" },
  ];

  const rightLinks = [
    { href: "#services", text: "Services" },
    { href: "#contact", text: "Contact" },
    { href: "#booking", text: "Book now" },
  ];

  // Navigationslänkar för mobilmenyn
  const mobileLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="bg-primary">
      <nav className="container mx-auto px-8" aria-label="Main Navigation">
        {/* Grid för header */}
        <div className="grid grid-cols-[1fr_auto_1fr] max-lg:grid-cols-2 items-center font-bold uppercase">
          {/* Vänstra navigeringslänkar (visas endast på större skärmar) */}
          <div className="flex justify-end gap-4 max-lg:hidden">
            {leftLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-gray-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          <Logo></Logo>        

          {/* Högra navigeringslänkar (visas endast på större skärmar) */}
          <div className="flex justify-start gap-4 max-lg:hidden">
            {rightLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-gray-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Hamburgarikon för mindre skärmar */}
          <div className="lg:hidden flex justify-end relative">
            <Hamburger
              toggled={isMenuOpen}
              toggle={toggleMenu}
              size={40}
              color="#FFFFFF" // Vit färg på ikonen
            />

            {/* Dropdown-meny under knappen */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 z-50 rounded">
                <ul className="space-y-2 p-2">
                  {mobileLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block text-white hover:bg-gray-700 transition-colors px-4 py-2 rounded"
                        onClick={toggleMenu}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
