"use client";

import { navLinks } from "@/constant";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] transition-all duration-300 
      ${scrolled ? "bg-gray-700/50 shadow-lg" : "bg-gray-600"} 
      text-white rounded-2xl px-6 py-4 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-lg font-semibold tracking-wide">
          Adrian JSM
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navLinks?.map(({ link, name }) => (
              <li key={name} className="relative group">
                <a
                  href={link}
                  className="hover:text-yellow-300 transition-colors font-medium"
                >
                  {name}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden md:flex bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition-all"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
