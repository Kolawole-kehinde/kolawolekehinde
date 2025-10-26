"use client"
import { Home, Info, Server, FolderKanban, BookUser, Github, Twitter, Linkedin,Mail,} from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";

// Navigation links
const navLinks = [
  { icon: <Home size={18} />, label: "Home", to: "#home" },
  { icon: <Info size={18} />, label: "About", to: "#about" },
  { icon: <Server size={18} />, label: "Services", to: "#services" },
];

// Policy and route-based links
const policyLinks = [
  { icon: <FolderKanban size={18} />, label: "Projects", to: "#projects" },
  { icon: <BookUser size={18} />, label: "Contact", to: "#contact" },
];

// Social links
const socialLinks = [
  { icon: Github, href: "https://github.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Mail, href: "mailto:contact@example.com" },
];

const FooterLinkSection = ({ links }: { links: { icon: React.ReactNode; label: string; to: string }[] }) => (
  <ul className="space-y-2">
    {links.map(({ icon, to, label }) => (
      <li key={label} className="flex items-center hover:text-purple-400 transition-colors">
        <span className="mr-2">{icon}</span>
        {to.startsWith("#") ? (
          <a href={to}>{label}</a>
        ) : (
          <Link href={to}>{label}</Link>
        )}
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="text-white py-8 px-4 lg:px-0 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <Slide direction="left">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hot Links
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <FooterLinkSection links={navLinks} />
              <FooterLinkSection links={policyLinks} />
            </div>
          </div>
        </Slide>

        {/* Center Section */}
        <Fade>
          <div className="flex flex-col justify-between">
            <p className="text-gray-300 mb-6">
              Crafting responsive, high-performance websites with clean code and a user-focused approach.
            </p>
            <div className="overflow-hidden border-2 border-purple-600 rounded-lg py-2 mt-3">
              <div className="flex space-x-6 animate-marquee min-w-max ">
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Fade>

        {/* Right Section */}
        <Slide direction="right">
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to my newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none text-white w-full border-2 border-purple-600 bg-gray-800"
              />
              <button className="bg-linear-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </Slide>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-4 md:mb-0">© 2025 Khennycool. All rights reserved.</p>
        <p className="flex items-center">
          Built with <span className="text-red-500 mx-1">❤</span> by Khennycool
        </p>
      </div>
    </footer>
  );
};

export default Footer;
