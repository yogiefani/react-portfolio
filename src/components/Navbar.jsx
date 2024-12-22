import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-pink-500 text-2xl font-bold">
          Yogief
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-pink-500">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-pink-500">
            About Me
          </Link>
          <Link to="/projects" className="text-white hover:text-pink-500">
            Project
          </Link>
          <Link to="/contact" className="text-white hover:text-pink-500">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
