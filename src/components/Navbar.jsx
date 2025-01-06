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

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

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

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 flex-col bg-black/90 backdrop-blur-md py-4 px-6 space-y-4`}
        >
          <Link
            to="/"
            className="text-white hover:text-pink-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-pink-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-pink-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-pink-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
