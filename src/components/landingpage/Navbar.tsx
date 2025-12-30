"use client";

import { navLinks } from "@/src/constant";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] transition-all duration-300
      ${scrolled ? "bg-gray-800/70 shadow-md backdrop-blur-md" : "bg-gray-700/60"} 
      text-white rounded-xl px-6 py-4`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-semibold tracking-wide hover:text-yellow-400 transition-colors"
        >
         Khennycool
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navLinks?.map(({ link, name }) => (
              <li key={name} className="relative group">
                <a
                  href={link}
                  className="font-medium hover:text-yellow-300 transition-colors"
                >
                  {name}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop) */}
        <Link
          href="#contact"
          className="hidden md:flex items-center justify-center bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition-all"
        >
          Contact Me
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 animate-fadeIn">
          <ul className="flex flex-col gap-4">
            {navLinks?.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className="block text-white hover:text-yellow-400 transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="mt-4 block w-full text-center bg-white text-black font-semibold py-2 rounded-full hover:bg-yellow-400 hover:text-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
