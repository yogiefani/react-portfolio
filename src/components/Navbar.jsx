import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-transparent"
          : "bg-transparent border-white/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-pink-500 text-2xl font-bold">
          Yogief
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-pink-500 transition-colors"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
