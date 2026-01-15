import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/background.jpeg";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Student Registration", path: "/student-registration" },
    { name: "Subjects", path: "/subjects" },
    { name: "Teachers", path: "/teachers" },
  ];

  return (
    <header className="w-full shadow">
      {/* Top Bar */}
      <div className="bg-gray-600 mt-4 text-white text-sm py-2 px-4 flex justify-center items-center">
        <span>
          Baarbe primary & seconcdary <sup>school</sup> .
        </span>

        <Link
          to="/student-registration"
          className="ml-2 text-orange-500 font-semibold hover:underline"
        >
          Apply Now
        </Link>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-4 md:px-8 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="School Logo"
            className="h-14 w-14 object-cover rounded-full"
          />
          <span className="ml-3 text-xl md:text-2xl font-bold text-blue-900">
            Barbe School
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium ${
                location.pathname === link.path
                  ? "text-blue-900 border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Apply Button */}
        <div className="hidden md:block">
          <Link
            to="/student-registration"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 shadow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block font-medium ${
                location.pathname === link.path
                  ? "text-blue-900"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/student-registration"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600 font-semibold"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
